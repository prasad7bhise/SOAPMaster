 const express = require('express');
 const bodyParser=require('body-parser')

 //import the routers


 const routerAdmin=require('./admin')
 const routerCategory = require('./category')
 const routerMenu = require('./menu')
 const routerTable = require('./table')
 const routeUser = require('./users')
 const routerCart  = require('./cart')
 const routercheckout = require ('./checkout')
 const routerpayment = require ('./payment')
 

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use(bodyParser.json())//why we use this??
app.use('/admin',routerAdmin)
app.use('/category',routerCategory)
app.use('/menu',routerMenu)
app.use('/table',routerTable)
app.use('/users',routeUser)
app.use('/cart',routerCart)
app.use('/checkout',routercheckout)
app.use('/payment',routerpayment)


app.listen(4000,'0.0.0.0',()=>{
    console.log('Server Started on port 4000')
})

const db=require('./db')
const express=require('express')
const utils = require('./utils')
const router=express.Router()


router.post('/pay',(request,response)=>{ 
    const{id}=request.body
    var d = Date();
    d.toString()
    const{Total_test}=request.body
    const{payment_mode}=request.body
    const connection=db.connect()
    const statement=`insert into payment (id,datetime,Total_test,payment_mode) values ('${id}','${d}','${Total_test}','${payment_mode}')`
    console.log(statement)
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})




module.exports=router
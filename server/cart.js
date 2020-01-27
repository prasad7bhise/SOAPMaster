const db=require('./db')
const express=require('express')
const utils = require('./utils')
const router=express.Router()


router.get('/:id',(request,response)=>{
    const{id}=request.params
    const connection=db.connect()
    const statement=`select * from cart where id = '${id}'`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.delete('/delete/:cart_id',(request,response)=>{
    const{cart_id}=request.params

    const connection=db.connect()

    const statement=`delete from cart where cart_id='${cart_id}'`

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.post('/add',(request,response)=>{ 
    const{id}=request.body
    const{menu_id}=request.body
    const{menu_name}=request.body
    const{price}=request.body
    const connection=db.connect()
    const statement=`insert into cart (id,menu_id,menu_name,price) values ('${id}','${menu_id}','${menu_name}',${price})`
    console.log(statement)
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.post('/check',(request,response)=>{ 
    const{id}=request.body
    const{Total_test}=request.body
    var d = Date();
    d.toString() 
    const connection=db.connect()
    const statement=`insert into checkout (id,date,Total_test) values ('${id}','${d}',${Total_test})`
    console.log(statement)
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports=router
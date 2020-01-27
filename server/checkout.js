const db=require('./db')
const express=require('express')
const utils = require('./utils')
const router=express.Router()

router.get('/:id',(request,response)=>{
    const{id}=request.params
    const connection=db.connect()
    const statement=`select * from checkout where id = '${id}'`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.delete('/delete/:checkout_id',(request,response)=>{
    const{checkout_id}=request.params

    const connection=db.connect()

    const statement=`delete from checkout where checkout_id='${checkout_id}'`

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})




module.exports=router
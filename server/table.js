const db=require('./db')
const express=require('express')
const utils = require('./utils')

const router=express.Router()



router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from table_info`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
module.exports=router
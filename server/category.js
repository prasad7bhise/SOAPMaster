const db=require('./db')
const express=require('express')
const utils = require('./utils')

const router=express.Router()



router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from Category`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.post('/add-category',(request,response)=>{
    const{category_name}=request.body
    const connection=db.connect()
    const statement=`insert into Category (category_name) values ('${category_name}')`
    console.log(statement)
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.delete('/:category_id',(request,response)=>{
    const{category_id}=request.params

    const connection=db.connect()

    const statement=`delete from Category where category_id=${category_id}`

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.put('/update/:category_id',(request,response)=>{
    const{category_id}=request.params
     
    const{category_name}=request.body
    const connection=db.connect()

    const statement=`update Category set category_name='${category_name}' where category_id=${category_id}`

    connection.query(statement,(error,data)=>{
        connection.end()

        response.send(utils.createResult(error,data))
    })
})

module.exports=router
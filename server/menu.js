const db=require('./db')
const express=require('express')
const utils = require('./utils')

const router=express.Router()



router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from Menu_list`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.post('/',(request,response)=>{
    const{category_id}=request.body
    const{menu_id}=request.body
    const{menu_name}=request.body
    const{price}=request.body
    const connection=db.connect()
    const statement=`insert into Menu_list (category_id,menu_name,price) values (${category_id},'${menu_name}',${price})`
    console.log(statement)
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


router.delete('/:menu_id',(request,response)=>{
    const{menu_id}=request.params

    const connection=db.connect()

    const statement=`delete from Menu_list where menu_id=${menu_id}`

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

/*
router.put('/update/:menu_id',(request,response)=>{
    const{menu_id}=request.params
     
    const{menu_name}=request.body
    const{}
    const connection=db.connect()

    const statement=`update Category set category_name='${category_name}' where category_id=${category_id}`

    connection.query(statement,(error,data)=>{
        connection.end()

        response.send(utils.createResult(error,data))
    })
})
*/
module.exports=router
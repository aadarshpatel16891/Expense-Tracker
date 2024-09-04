const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render("index");
})

router.get('/create',(req,res)=>{
    res.render("create");
})

router.post('/save',(req,res)=>{
    const newUser={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
})

module.exports=router;
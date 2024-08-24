const express=require('express')
const router=express.Router()
const User=require('../models/users')

router.post('/register', async(req,res)=>{
    const {name,email,password}=req.body
    try{
        const user=new User({name,email,password})
        await user.save()
        res.status(201).send("User Registered Successfully")
    }
    catch(err){
        res.status(400).send('Error registering user');
    }
});

module.exports=router;
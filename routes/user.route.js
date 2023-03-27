
const express = require("express")

const {UserModels} = require("../model/users.model")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const approute = express.Router()

approute.post("/register",async(req,res)=>{
     const {name,email,gender,password,age,city,is_married} = req.body
    try{
             const user = await UserModels.find({email})
        
            if(user){
                res.status(200).send({"msg":"User already exist, please login"})
            }else{
        
            bcrypt.hash(password, 5, async(err, hash)=>{
            const newuser = new UserModels({name,email,gender,password:hash,age,city,is_married})
            await newuser.save()
            res.status(200).send({"msg":"new user added"})


        });
    }
    }
    catch(err){
        res.status(400).send({"msg":"new user id not added"})
    }


})


approute.post("/login", async(req,res)=>{
   const {email,password} = req.body

   try{
   const user = await UserModels.find({email})
   if(user){
    
    bcrypt.compare(password, user[0].password, async(err, result)=> {
        if(result){
            res.status(200).send({"msg":"logged in","token":jwt.sign({"userId":user[0]._id}, "batman")})
        }else{
            res.status(400).send({"msg":"not matched"})
        }
    });


   }

}catch(err){
    res.status(400).send(err.message)
}


})










module.exports={
    approute
}
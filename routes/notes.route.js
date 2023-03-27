
const express = require("express")

const {NoteModels} = require("../model/notes.model")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const noteroute = express.Router()



noteroute.post("/add",async(req,res)=>{

try{
     const newnote = new NoteModels(req.body)
     await newnote.save()
     res.status(200).send({"msg":"note added"})

}
catch(err){

    res.status(200).send({"msg":"note is not added"})

}


})


noteroute.get("/",async(req,res)=>{
    const token =  req.headers.authorization
    const decoded = jwt.verify(token,"batman")


      
    try{
         const newnote = await NoteModels.find({userId:decoded.userId})
         res.status(200).send(newnote)
    
    }
    catch(err){
    
        res.status(400).send({"msg":err.message})
    
    }
    
    
    })

     
    noteroute.patch("/update/:id", async(req,res)=>{

      const {id}= req.params
      try{
        await NoteModels.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"updated"})
      }
      catch(err){
        res.status(400).send({"msg":err.message})
      }


    })
   


    noteroute.delete("/delete/:id",async(req,res)=>{
        const {id}=req.params
        
        try{
            await NoteModels.findByIdAndDelete({_id:id})
            res.status(200).send({"msg":"deleted"})
          }
          catch(err){
            res.status(400).send({"msg":err.message})
          }


    })

module.exports={
    noteroute
}
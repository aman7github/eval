
const jwt = require("jsonwebtoken")


const auth = (req,res,next)=>{

   const token = req.headers.authorization
   if(token){

     const decoded = jwt.verify(token,"batman")
     console.log(decoded)

      if(decoded){
        console.log(req.body)
        console.log(decoded.userId)
        
        req.body.userId = decoded.userId

        next()
      }else{
        res.status(400).send({"msg":"decoded not found"})
      }

   }else{
    res.status(400).send({"msg":"token is not found"})
   }
  }

 



  module.exports={
    auth
  }



  // {

  //   "title":"react",
  //   "body":"js",
  //   "device":"laptop",
  //   "no_of_comments":7
    
  //   }



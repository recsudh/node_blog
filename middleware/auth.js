const User = require("../models/user")
const auth= async(req,res,next)=>{
    try{
        const user = await User.findById(req.session.user_Id)
        if(!user){
           return res.redirect('/')
        }
          next()

    }catch(e){
      console.log(e)
      res.redirect('/')
    }

}

module.exports= auth
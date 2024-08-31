const User = require("../models/user")
const auth= async(req,res,next)=>{
   
    if(req.session.user_Id){
        return res.redirect("/")
    }
    next()

}

module.exports= auth
const User = require("../models/user")

const register_users= async(req,res)=>{
    
    // console.log(req.session.registration_error)
    const error= [req.flash("registration_error")]
    const data= req.flash("data")[0]
    console.log(data)
    res.render("user_registration",{
        error,
        data
    })
}

module.exports= register_users
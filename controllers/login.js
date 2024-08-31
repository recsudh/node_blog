const bcryptjs= require("bcryptjs")
const User= require("../models/user")

const login = async(req,res)=>{

    //  getting the required data
    
    const {email,password}= req.body
    console.log(email,password)
    if(!email||!password){
       return res.redirect("/auth/login")
    }
    const user= await User.findOne({email})
    console.log(user)
    if(!user){
        console.log("No user Found!")
        return res.redirect("/auth/login")
    }
    const is_match = await bcryptjs.compare(password,user.password)
    if(!is_match){
        console.log("Password didn't match!")
       return res.redirect("/auth/login")
    }
    req.session.user_Id= user._id
    req.session.save()
    console.log(req.session.user_Id)
    res.redirect("/")
}

module.exports= login
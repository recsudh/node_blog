const User= require("../models/user")


const store_user= async(req,res)=>{
    try{
        
        const user = new User(req.body)
        console.log(User)
        if(!user.username|| !user.password||!user.email){
            throw new Error("User data is required!!")
            
        }
         
         res.redirect("/")
         await user.save()

        req.session.user_Id= user._id
        req.session.save()
        console.log(req.session.user_Id)
    }catch(e){
        console.log(e)
        const registration_error= "User data is reuqired!!"
        req.flash("registration_error",registration_error)  
        req.flash("data",req.body)
        return res.redirect("/auth/register")

    }


}

module.exports= store_user
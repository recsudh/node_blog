const mongoose= require("mongoose")
const bcryptjs= require("bcryptjs")

const userschema= mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required!"]
    },
    email:{
        type:String,
        required:[true,"Email is required!"]
    },
    password:{
        type:String,
        required:[true,"Email is required!"] 
    }
})

// hassing password

userschema.pre("save", async function(next){
    const User= this
    console.log(User)
    User.password= await bcryptjs.hash(User.password,8)
    
    next()

})

const user = mongoose.model("user",userschema)


module.exports= user
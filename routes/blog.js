// const express= require("express")
// const blog= require("../models/blog")

// const route = express.Router()

// route.post("/post/store",async (req,res)=>{
//     try{
//         const post = new blog(req.body)
//         console.log(post)
//         await post.save()
//         res.redirect("/")
//     }catch(e){
//         console.log(e)
//     }
// })

// module.exports= route
const validatemiddleware=(req,res,next)=>{
  console.log("Request Files:", req.files); // Log to check files
  console.log("Request Body:", req.body); // Log to check body

  if(!req.files||!req.body.title||!req.body.subtitle||!req.body.content){
   

    return res.redirect("/new")
  }
  next()

}
  
  module.exports= validatemiddleware
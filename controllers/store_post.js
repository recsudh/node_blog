const Blog= require("../models/blog")
const path = require("path")

const store_post= async (req, res) => {
    try{
      console.log(req.body);
  
    console.log(req.files);
    console.log(path.join(__dirname, "../public/post"));
  
    const { image } = req.files;
  
    image.mv(
      path.resolve(__dirname, "../public/post", image.name),
      async (error) => {
        const blog = new Blog({ ...req.body, image: `/post/${image.name}`,author:req.session.user_Id });
        console.log(blog)
        await blog.save();
        res.redirect("/");
      }
    )}catch(e){
      console.log(e)
    }
  }


  module.exports=store_post
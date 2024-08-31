const Blog= require("../models/blog")

const get_post= async (req, res) => {
    const post = await Blog.findById(req.params.id).populate("author");
    console.log(post);
  
    res.render("post", {
      post,
    });
  }

  module.exports= get_post
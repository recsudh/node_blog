const Blog= require("../models/blog")



const home_page=async (req, res) => {
    const post = await Blog.find({}).populate("author")
    // console.log(post);
    res.render("index", {
      post,
    });
    console.log(req.session)
  }

  module.exports= home_page
const create_post=(req, res) =>
     {
      console.log(req.session.user_Id)
      if(req.session.user_Id){
       return  res.render("new");
      }
    res.redirect("/auth/login")
  }


  module.exports= create_post
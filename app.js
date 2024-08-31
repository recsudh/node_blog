// library import
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const expressSession = require("express-session"); 
const MongoStore = require("connect-mongo"); 
const { default: mongoose } = require("mongoose");
const auth = require("./middleware/auth")
const connectFlash= require("connect-flash")





// files import
const db = require("./db/mongo");
// connecting to mongodb server
db();
const Blog = require("./models/blog");

const blog_route = require("./routes/blog");
const create_post= require("./controllers/create_post")
const home_page= require("./controllers/home_page")
const store_post= require("./controllers/store_post")
const get_post= require("./controllers/get_post")
const register_user= require("./controllers/register_user")
const store_user= require("./controllers/store_user")
const user_login= require("./controllers/user_login")
const login= require("./controllers/login")
const redirectifautheticated= require('./middleware/redirectifauthenticated')
const logout= require("./controllers/logout")


const app = express();
// Initialize session with MongoDB store
app.use(expressSession({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL  
  })
}));
// validate middleware

const validatemiddleware= require("./middleware/store_post");

app.use(connectFlash())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());
app.use("/posts/store",validatemiddleware)
// app.use(blog_route)


const dir_path = path.join(__dirname, "./public");
const dir = path.join(__dirname, "./views/mains");
const partials_path = path.join(__dirname, "./views/partials");

console.log(dir);
console.log(dir_path);
console.log(partials_path);

const port = process.env.port;

app.set("view engine", "hbs");
app.set("views", dir);
app.use(express.static(dir_path));
hbs.registerPartials(partials_path);

// Middleware to set global variables for Handlebars
app.use((req, res, next) => {
  res.locals.auth = req.session.user_Id; // Set 'auth' variable globally
  next();
});




app.get("/", home_page);

app.get("/new",auth, create_post);
// storing data
app.post("/posts/store",auth,validatemiddleware,store_post);

app.get("/auth/register",redirectifautheticated,register_user)

app.get("/post/:id",get_post );

app.get("/auth/login",redirectifautheticated,user_login)

app.post("/user/login",redirectifautheticated,login)


app.get("/auth/logout",auth,logout)

app.post("/user/register",store_user)




app.listen(port, () => {
  console.log(`port is on at ${port}`);
});


// page-not found middleware
app.use((req,res)=>{
  res.render("not-found")
})



const mongoose= require("mongoose")

const blogschema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"Title is required!!"]
    },
    subtitle:{
        type:String,
        required:[true,"subtitle is required!!"]
    },
    content:{
        type:String,
        required:[true,"content is required!!"]
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    image:{
        type:String
    },
    createdAT:{
        type:Date,
        default: new Date()
    }
})

const blog= mongoose.model("blog",blogschema)

module.exports= blog
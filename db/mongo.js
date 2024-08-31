const mongoose= require("mongoose")

const db = async ()=>{
    
 try {
      const mongo = await mongoose.connect(process.env.MONGO_URL)
      if(mongo){
        console.log(`mongo db connected @ ${mongoose.connection.readyState}`);
      }
    }
    catch(e){
        console.log(e);
    }

}

module.exports=db
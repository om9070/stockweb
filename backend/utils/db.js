const mongoose=require("mongoose")
mongoose.connect(process.env.CONNECTION_URL).then(()=>console.log("database is connected")).catch((e)=>console.log(e))
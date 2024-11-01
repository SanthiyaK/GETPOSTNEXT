import mongoose from "mongoose";


export default function dbconnect() {
   try {
    mongoose.connect(process.env.MONGO_URI)
    console.log("Mongodb Connected");
    
   } catch (error) {
    console.log("Error in DB Connection");
    
   }
}

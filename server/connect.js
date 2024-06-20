import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDb= async ()=>{
  try {
    const connectionUri = process.env.connectionUri;
    try {
      await mongoose.connect(connectionUri)
      console.log("connected to db successufully")
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    return error
  }

}
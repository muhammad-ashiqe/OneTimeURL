import mongoose from "mongoose"

export const connectDB = async()=>{
  try {
    const db = mongoose.connect(process.env.MONGO_URI);
    console.log('DB Connected Success!')
  } catch (error) {
    console.log(error)
  }
}
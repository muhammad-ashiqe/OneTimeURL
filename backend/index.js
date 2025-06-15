import express from 'express'
import { configDotenv } from 'dotenv';
import { connectDB } from './config/db.js';
import { router } from './routes/routes.js';
import cors from "cors"

// Using express-rate-limit
import rateLimit  from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP'
});


const app = express()
configDotenv()

const PORT = process.env.PORT;

connectDB()

app.get('/',(req,res)=>{
  res.send('API is Running!')
})

app.use('/api/url', limiter);

app.use(express.json())

app.use(cors())

app.use('/api',router)


app.listen(PORT,()=>{
  console.log(`server started at http://localhost:${PORT}`)
})
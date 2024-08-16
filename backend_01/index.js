import express from 'express';
import router from './routes/url.js'; // Ensure the correct file extension
import { connectToMongoDB } from './connect.js'; // Ensure the correct file extension
import URL from './models/url.js';
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 8000;

const mongoUri = process.env.MONGO_URI;
connectToMongoDB(mongoUri)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
app.use(cors())
app.use(express.json())
app.use('/url', router);
app.get("/:shortId",async(req,res)=>{
    const shortId=req.params.shortId;
   const entry= await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{timestamp:Date.now(),}
    }})

    res.redirect(entry.redirectUrl)
})

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

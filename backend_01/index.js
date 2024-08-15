const express=require('express')
const cors = require('cors');

const app=express();
PORT=8000
app.use(cors());
app.get('/users',(req,res)=>{
    res.json({data:"You are successfully connected to backend"})
})


app.listen(PORT,()=>{
    console.log("app is running")
})





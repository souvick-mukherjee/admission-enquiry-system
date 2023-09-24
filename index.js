const express = require('express');
const mongoose=require('mongoose');

const app=express();
const port=3000;

mongoose.connect('mongodb://localhost:27017/enquiries');

app.listen(port,()=>{
    console.log("Server running on port 3000");
})
const express=require('express');
const mongoose=require('mongoose');
const {Admin, Student} = require('../db/database');


const route=express.Router();

route.get('/admin/signup',async (req,res)=>{
    const {username,password}=req.body;
    const admin = await Admin.findOne
})
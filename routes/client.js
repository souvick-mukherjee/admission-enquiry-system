const express=require('express');
const mongoose=require('mongoose');
const {Client, Student} = require('../db/database');
const jwt=require('jsonwebtoken');
const {authenticateJwt,SECRET}=require('../middleware/auth');

const route=express.Router();



module.exports=router();

const config=require('config');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Joi=require('joi');
const express=require('express');
const mongoose= require("mongoose");
const rouer=express.Router();
const{usersSchema}=require('../model/userregestr');

const validator = require('express-joi-validation').createValidator({})
var app = express();  
app.use(express.json());

const User =mongoose.model('users',usersSchema);

 Schema = Joi.object().keys({ 
 
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(5).max(1024).required(),
 }); 
 rouer.post('/' ,async  function (req, res) {  
    

     const  users=await User.findOne({ email:req.body.email});
       if(!users)return res.status(400).send('invalid email or password');
       const validpassword=await bcrypt.compare(req.body.password,users.password);
       if(!validpassword)return res.status(400).send('invalid email or password');
  
       else {  const token= jwt.sign({_id:users._id},config.get('jwtprivatkey'));
       res.send(token);
      
      
      }
    
   
 }
 )
 
    module.exports=rouer;
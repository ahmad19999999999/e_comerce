
const config=require('config');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Joi=require('joi');
const express=require('express');
const mongoose= require("mongoose");
const rouer=express.Router();
const {usersSchema,validiteuser}= require('../model/userregestr');
const admin = require('../midellwere/admin');
const auth = require('../midellwere/auth');
const validator = require('express-joi-validation').createValidator({})
var app = express();  
app.use(express.json());


const User =mongoose.model('users',usersSchema);

rouer.get('/me',auth,async function (req, res) {  
  const users= await User.findById(req.users._id).select('password');
   
    res.send(users);
  
}) 


 rouer.get('/:id',admin, async function (req, res) {  
   const users= await User.findById(req.users._id).select('name');
   
    res.send(users);
 }) 

 Schema = Joi.object().keys({ 
  name: Joi.string().min(5).max(50).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(5).max(1024).required(),
  isAdmin:Joi.bool().required()
  
 }); 
 rouer.post('/' ,validator.body( Schema),async  function (req, res) {  

   
   { let users=new User( {
    
     name:req.body.name,
     email:req.body.email,
     password:req.body.password,
     isAdmin:req.body.isAdmin

    })
    const salt=await bcrypt.genSalt(10);
    users.password=await bcrypt.hash(users.password,salt);
    users=await users.save();
    const token= jwt.sign({_id:users._id,isAdmin:users.isAdmin},config.get('jwtprivatkey'));
    res.header('x_auth_token',token).send(users);
 }}
 )
 
    module.exports=rouer;
   
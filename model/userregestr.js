const Joi=require('joi');
const express=require('express');
const roter=express.Router();
const mongoose= require("mongoose");


    

const usersSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:255

    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024

    },
    isAdmin:{
        type:Boolean


    }
   
    
});
const User =mongoose.model('users',usersSchema);



async function creatuser(name,age,adress){
    
    const users=new User(
     {
         name,
         age,
         adress
        
 
 
    }
 );
 const result=await users.save();
 console.log(result);
 }
// creatuser('ahmad',27,'msila');

module.exports=roter;
module.exports.User=User;

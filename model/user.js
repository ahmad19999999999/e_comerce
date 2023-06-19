const express=require('express');
const roter=express.Router();
const mongoose= require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/films')
.then(()=>console.log('conected mongodb ...'))
.catch(err=>console.error('could not conected ...',err));
    

const usersSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255
    },
    age:{
        type:Number,
        required:true,
        
    },
    adress:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255

    }
   
    
});
const Users =mongoose.model('users',usersSchema);
async function creatuser(name,age,adress){
    
    const users=new Users(
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

module.exports = mongoose.model('users', usersSchema);
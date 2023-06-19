const express=require('express');
const roter=express.Router();
const mongoose= require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/films')
.then(()=>console.log('conected mongodb ...'))
.catch(err=>console.error('could not conected ...',err));
const stdioSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255
    },

    adress:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255
    }
    
        
   
    
});
const Stdio =mongoose.model('stdio',stdioSchema);

async function creatstdio(name,adress){
    
    const stdio=new Stdio(
     {
         name,
         adress
        
 
 
    }
 );
 const result=await stdio.save();
 console.log(result);
 }
 //creatstdio('hifadz','oranalge');

 module.exports=roter;
 exports.stdioSchema=stdioSchema;
 exports.Stdio=Stdio;
 
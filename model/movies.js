const Joi=require('joi');
const express=require('express');
const roter=express.Router();
const usersSchema=require('./user').Schema;
const mongoose= require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/films')
.then(()=>console.log('conected mongodb ...'))
.catch(err=>console.error('could not conected ...',err));


const movisSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255
    },
    category:{
        type:String,
        required:true,
        maxlength:255,
        minlength:5
    },
    user:
        
        [
            {
              type: mongoose.Schema.ObjectId,
              ref: "User"
            }
          ]
    

    
        
    
   
    
});
const Movies =mongoose.model('movies',movisSchema);
async function creatmovies(name,category,user){
    
    const movi=new Movies(
     {
         name,
         category,
         user
        
 
 
    }
 );
 const result=await movi.save();
 console.log(result);
 }
 //creatmovies('thedark','historiq','6433531de9b487e99a4b98a0');


Movies.exportes=Movies;
module.exports = mongoose.model('movies',movisSchema);
exports.movisSchema=movisSchema;

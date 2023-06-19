const express=require('express');
const mongoose= require("mongoose");

const Movies =require('../model/movies');
const roter=express.Router();
var app = express();  
app.use(express.json());

//const Movies =mongoose.model('movies',movisSchema);

 roter.get('/:id',  async function (req, res) {  
   const movies= await Movies.findById(req.params.id).select('name');
   
    res.send(movies);
 }) 
roter.post('/', async  function (req, res) {  
  
    let movies=new Movies( {
     name:req.body.name,
     category:req.body.category,
     user:req.body.user
        

   
}
    );
    movies=await movies.save();
    res.send(movies);
 }) 

 
 
    module.exports=roter;
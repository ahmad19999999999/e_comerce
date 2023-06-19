const express=require('express');
const mongoose= require("mongoose");
const rouer=express.Router();
const {stdioSchema}=require('../model/stdio1');
var app = express();  
app.use(express.json());



const Stdio =mongoose.model('stdio',stdioSchema);

 rouer.get('/:id',  async function (req, res) {  
   const stdio= await Stdio.findById(req.params.id).select('name');
   
    res.send(stdio);
 }) 
 rouer.post('/', async  function (req, res) {  
  
 
    let stdio=new Stdio( {
    
     name:req.body.name,
     adress:req.body.adress

    })
    
     stdio=await stdio.save();
    res.send(stdio);
 }) 

 
 
    module.exports=rouer;

var fs = require('fs');
var data = fs.readFileSync('MOCK_DATA.json');
var elements = JSON.parse(data);
const express=require('express');



const roter=express.Router();
const bodyParser = require('body-parser');
var app = express();  
app.use(express.json());
app.use(bodyParser.json());




//console.log(fullNames);
roter.get('/:id', function (req, res) { 
    const item= elements.find(c=>c.id===parseInt(req.params.id ))
    if(!item) res.status(404).send('the item was given id not found')
   
     res.send(item);

  
  }) 
  roter.post('/', function (req, res) {  
  
    app.use(function (req, res, next) {
        console.log(req.body) // populated!
        next()
      })
  
    const item=[{
       id:elements .length+1,
       first_name:req.body.first_name,
       last_name:req.body.last_name,
       email:req.body.email,
       gender:req.body.gender,
       ip_address:req.body.ip_address

    }];
    
    elements.push(item);
    res.send(item);  
 }) 
 roter.delete('/:id', function (req, res) {  
    const item= elements.find(c=>c.id===parseInt(req.params.id ))
    if(!item) res.status(404).send('the course was given id not found')
     else {const index=elements.indexOf(item);
       elements.splice(index,1);
       res.send(item);
     }
    }) 

  module.exports=roter;
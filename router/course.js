

//const { Router } = require('express');
const express=require('express');
const rouer=express.Router();
var app = express();  
app.use(express.json());

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
 ];

 rouer.get('/:id', function (req, res) {  
   const course= courses.find(c=>c.id===parseInt(req.params.id ))
   if(!course) res.status(404).send('the course was given id not found')
    res.send(course);
 }) 

 
 rouer.post('/', function (req, res) {  
  
 
    if(!req.body.name||req.body.name.length<3){
       res.status(400).send('the name shuld be minumun 3 character');
       return;
    }
    const course={
       id:courses.length+1,
     name:req.body.name
    };
    courses.push(course);
    res.send(course);  
 }) 
 rouer.put('/:id', function (req, res) {  
    const course= courses.find(c=>c.id===parseInt(req.params.id ))
    if(!course) res.status(404).send('the course was given id not found')
     else {course.name=req.body.name
       res.send(course);
    }
  }) 
  rouer.delete('/:id', function (req, res) {  
    const course= courses.find(c=>c.id===parseInt(req.params.id ))
    if(!course) res.status(404).send('the course was given id not found')
     else {const index=courses.indexOf(course);
       courses.splice(index,1);
       res.send(course);
     }
    }) 
    module.exports=rouer;
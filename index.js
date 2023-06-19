
const config=require('config');
const Joi=require('joi');
var express = require('express');
const mongoose= require("mongoose");
const course=require('./router/course');
const home=require('./router/home');
const data=require('./router/data');
//const stdio1=require('./model/stdio1');
//const stdio=require('./router/stdio');
//const movies=require('./model/movies');
//const user=require('./model/user');
//const movies=require('./router/movies');
const users=require('./router/userregester');
const auth=require('./router/auth');



   if(!config.get('jwtprivatkey')){
      console.log('error fatal :jwtprivatekey not define');
      process.exit(1);
   }
var app = express();  
app.use(express.json());
//app.use(express.urlencoded({extends:true}));
app.use(express.static('public'));


app.use('/api/courses',course);
app.use('/',home);
app.use('/api/item',data);
//app.use('/api/stdio',stdio);
//app.use('/api/movies',movies);
app.use('/api/user',users);
app.use('/api/auth',auth);
mongoose.connect('mongodb://127.0.0.1:27017/films')
.then(()=>console.log('conected mongodb ...'))
.catch(err=>console.error('could not conected ...',err));


//configeration
//console.log('Aplicatin Name:'+config.get('name'));
//console.log('Email Server:'+ config.get('email.host'));


//if(app.get('env')==='development'){
  // app.use(morgan('tiny'));
   //console.log('morgan enable....');
//}//test env



app.get('/', function (req, res) {  
   res.send('Welcome to JavaTpoint');  
})  

 
app.get('/api/posts/:year/:month', function (req, res) {  
   res.send(req.params);  
}) 

 

var server = app.listen(3000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port) ; 
})  



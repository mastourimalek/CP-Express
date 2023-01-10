//1 require exxpress
const express = require('express');
const fs = require('fs') ;

const v = require('./verif');

//2 create instance
const app = express();


//midleware body-parser
app.use(express.json());


//3 create port
const port = 2431 ;

// CRUD Functions
app.get('/',v,(req,res)=>{
  fs.readFile('./Home.html','utf8',(err,data)=>{
      err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
  })
})

app.get('/Home.html',v,(req,res)=>{
  fs.readFile('./Home.html','utf8',(err,data)=>{
      err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
  })
})

app.get('/OurServices.html',v,(req,res)=>{
  fs.readFile('./OurServices.html','utf8',(err,data)=>{
      err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
  })
})

app.get('/ContactUs.html',v,(req,res)=>{
  fs.readFile('./ContactUs.html','utf8',(err,data)=>{
      err?res.end('FILE NOT FOUND')&&console.error(err) :res.end(data);
  })
})

//5edmeeeeeeeeeeeeeeeeeeeeeeet papiiiiiiiiiiiiiiiii
//4 create server
app.listen(port, (error) => {
    error ? console.log(error) :
  console.log(`Example app listening on port ${port}`)
})
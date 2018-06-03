const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

// Mongo
mongoose.connect('mongodb://localhost/portfolio');
const Contact = mongoose.model('Contact',{
  name: String,
  image: String,
  status: String,
  specialization: String,
  address: String,
  email: String,
  phone: String
}, 'contacts_block');
const SidebarBlocks = mongoose.model('SidebarBlocks',{
  title: String,
  titleIcon: String,
  subBlocks: Array
},'sidebar_blocks')
const ContentpartBlocks = mongoose.model('ContentpartBlocks',{
  title: String,
  titleIcon: String,
  subBlocks: Array
},'contentpart_blocks');

// Variables
let accessKey = null;
if (fs.existsSync('access.json')){
  accessKey = JSON.parse(fs.readFileSync('access.json') ).key;
}else{
  console.log("NO ACCESS KEY FILE!");
}


// Settings
app.use(bodyParser.json() );

// Logs
app.get('*', (req, res, next) => {
  console.log("GET: "+req.url);
  next();
});
app.post('*', (req, res, next) => {
  console.log("POST: "+req.url);
  next();
});

// GET routes

app.get('/contactsInfo', (req, res) => {
  Contact.find({})
  .then( (result)=>{
    res.send(result[0]);
  })
  .catch( (error)=>{
    res.sendStatus(500);
  });
});

app.get('/sidebarBlocks', (req, res) => {
  SidebarBlocks.find({})
  .then((result) => {
    res.send(result);
  })
  .catch((error) => {
    res.sendStatus(500);
  });
});

app.get('/contentpartBlocks', (req, res) => {
  ContentpartBlocks.find({})
  .then((result) => {
    res.send(result);
  })
  .catch((error) => {
    res.sendStatus(500);
  });
});

// POST routes
app.post('/checkKey', (req, res) => {
  if(req.body.key){
    console.log("Checking: ("+accessKey+") "+req.body.key);
    if(accessKey===req.body.key){
      res.sendStatus(200);
    }else{
      res.sendStatus(403);
    }
  }
});


app.listen(8082,()=>{
  console.log("Server has been started on: 8082");
});
// console.log("hellow world, Node is working")

const express = require('express');
const app = express();

const nodemon = require('nodemon')
const mongoose = require('mongoose')
const pug = require('pug')
const path = require('path')
const bodyParser = require('body-parser') 
const loginRoutes = require('./routes/loginRoutes')


// Database connection
mongoose.connect('mongodb://localhost:27017/Covid_Stores', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err) {
  if (err) throw err;
  else
    console.log('You are live on the database');
})

// Middleware
app.use(bodyParser.urlencoded({ extended: true })) 

app.set('view engine','pug');
app.set('views', './views');

app.use(express.static('public'));

app.use('/', loginRoutes)

// Error
app.get('*', (req, res) => { 
  res.send('erorr page');
  });

// Listening for requests: the server!
app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

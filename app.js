//importing the express package into the variable express (makes it a method)
const express = require('express');
const app = express();//use app method to stop repeated calling of  express.
// importing packages and declaring them to variables.
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const pug = require('pug')
const path = require('path')
const session = require("express-session");
const passport = require("passport");
// const passportLocal = require('passport-local')
const passportLocalMongoose = require("passport-local-mongoose");
const connectEnsureLogin = require("connect-ensure-login");
const bodyParser = require('body-parser') 
//importing files to be used ,assigning them to a variable 
const loginRoutes = require('./routes/loginRoutes');
const Employee = require('./models/salesAgentModel')

// Database connection
//Method mongoose takes on a prperty(connect),two parameters ie end point of our database ,defines callback functions.
mongoose.connect('mongodb://localhost:27017/Covid_Stores', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err) {
  if (err) throw err;
  else
    console.log('Connected');
})

// Middleware
//method app takes in the use property,declares bodyparser to encode all end points to see whats in the body and send it back.
app.use(bodyParser.urlencoded({ extended: true })) 

app.set('view engine', 'pug');   //set pug as the default view engine./any other views should come from views
app.set('views', './views');

//Get all static files from public folder
app.use(express.static('public'));
app.use('/itemsPage/uploads', express.static(path.join(__dirname, 'uploads')))


// Session setup
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

/*  MIDDLEWARE SETUP : PASSPORT */
app.use(passport.initialize());
app.use(passport.session());

// Agent authentication
passport.use(Employee.createStrategy());
passport.serializeUser(Employee.serializeUser());
passport.deserializeUser(Employee.deserializeUser());

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(Employee.authenticate()));

app.use('/', loginRoutes)  //routes are in the login routes which commence with / end point.

// method app ,propert get , two parameters ie Error and call back function.
app.get('*', (req, res) => { 
  res.send('error');
  });

// Listening for requests: the server!(appmethod/two parameters ie listening,console log)
app.listen(4400, () => {
    console.log(`Listening on port 4400`);
});

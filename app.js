const express = require('express');
const app = express();

const nodemon = require('nodemon')
const mongoose = require('mongoose')
const pug = require('pug')
const path = require('path')
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const connectEnsureLogin = require("connect-ensure-login");
const bodyParser = require('body-parser') 
const loginRoutes = require('./routes/loginRoutes');
const Agent = require('./models/salesAgentModel')
const Manager = require('./models/Manager')
// const { Agent } = require('http');


// Database connection
mongoose.connect('mongodb://localhost:27017/Covid_Stores', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err) {
  if (err) throw err;
  else
    console.log('Connected');
})

// Middleware
app.use(bodyParser.urlencoded({ extended: true })) 

app.set('view engine','pug');
app.set('views', './views');

app.use(express.static('public'));


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
passport.use(Agent.createStrategy());
passport.serializeUser(Agent.serializeUser());
passport.deserializeUser(Agent.deserializeUser());

passport.use('manager-local',Manager.createStrategy());
passport.serializeUser(Manager.serializeUser());
passport.deserializeUser(Manager.deserializeUser());

app.use('/', loginRoutes)

// Error
app.get('*', (req, res) => { 
  res.send('error');
  });

// Listening for requests: the server!
app.listen(4400, () => {
    console.log(`Listening on port 4400`);
});

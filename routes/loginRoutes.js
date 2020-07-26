const express = require('express');
const router = express.Router()

const Customer = require('../models/customerRegModel')
const Agent = require('../models/salesAgentModel')

const path = require('path');
// const { read } = require('fs');

// Main login page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/login.html'))
})

// router.post('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '../views', '/homePage.html'))
// })

//Html pages
router.get('/agentReg', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/salesAgentReg.html'))
})


router.get('/itemReg', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/itemReg.html'))
})


router.get('/purchaseReg', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/purchaseReg.html'))
})

router.get('/customerReg', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/customerReg.html'))
})

router.get('/homePage', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/homePage.html'))
})

// Pug Pages rendered
router.get('/customerRegPage', async (req, res) => {
    var userlist = await Customer.find()
    res.render('customerRegPage', {
        customers: userlist
    })
})

router.get("/agentPage", async (req, res) => {
  var userlist = await Agent.find();
  res.render("salesAgentPage", { agents: userlist });
});



// User Authentication
router.post("/", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("body comming to passport ", req.body);

    if (err) {
      return next(err);
    }
    if (!user) return res.redirect("/?info=" + info);

    req.logIn(user, function (err) {
      if (err) return next(err);
      return res.redirect("/customerRegPage");
    });
  })(req, res);
});

// Model to database connection
router.post('/customerReg', async (req, res) => {
    try {
        const newCustomer = new Customer(req.body)
        await newCustomer.save()
        res.redirect('/customerRegPage')
    } catch (error) {
        console.log(error);
        res.status(404).send('unable to send to the database')
    }
})

router.post("/agentReg", async (req, res) => {
  try {
    const newAgent = new Agent(req.body);
    await Agent.register(newAgent, req.body.password, (err) => {
      if (err) throw err;
      res.redirect("/salesAgentPage");
    });
  } catch (error) {
    console.log(error);
    res.status(404).send("unable to send to the database");
  }
});


module.exports = router;
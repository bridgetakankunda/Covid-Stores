const express = require('express');
const multer = require('multer')
const router = express.Router()
const passport = require('passport');
const Customer = require('../models/customerRegModel')
const Employee = require('../models/salesAgentModel')
const Manager = require('../models/Manager')
const Item = require('../models/itemModel')


const path = require('path');
// const { read } = require('fs');


// Main login page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/login.html'))
})

router.get('/adminlogin', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/adminlogin.html'))
})

// router.post('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '../views', '/homePage.html'))
// })

//Html pages
router.get('/agentReg', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/salesAgentReg.html'))
})

router.get('/managerReg', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/managerReg.html'))
})

router.get('/itemReg', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/itemReg.html'))
})

router.get('/customerReg', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/customerReg.html'))
})

router.get('/homePage', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/homePage.html'))
})


router.get('/adminPanel', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/adminPanel.html'))
})


// Pug Pages rendered
router.get('/customerRegPage', async (req, res) => {
  var userlist = await Customer.find()
  res.render('customerRegPage', {
    customers: userlist
  })
})

router.get("/agentPage", async (req, res) => {
  var userlist = await Employee.find();
  res.render("salesAgentPage", {
    employees: userlist
  });
});

// Authentication
router.post('/', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('body comming to passport ', req.body);

    if (err) {
      return next(err);
    }
    if (!user) return res.redirect('/?info=' + info);

    req.logIn(user, function (err) {
      if (err) return next(err);
      return res.redirect('/customerRegPage');
    });
  })(req, res);
});

router.post('/adminlogin', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('body comming to passport ', req.body);

    if (err) {
      return next(err);
    }
    if (!user) return res.redirect('/?info=' + info);

    req.logIn(user, function (err) {
      if (err) return next(err);
      return res.redirect('/adminPanel');
    });
  })(req, res);
});



router.post('/agentReg', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body)
    await Employee.register(newEmployee, req.body.password, (err) => {
      if (err) throw err
      res.redirect('/agentPage')
    })
  } catch (error) {
    console.log(error);
    res.status(404).send('unable to send to the database')
  }
})

router.post('/managerReg', async (req, res) => {
  try {
    const newManager = new Manager(req.body)
    await Manager.register(newManager, req.body.password, (err) => {
      if (err) throw err
      res.redirect('/adminlogin')
    })
  } catch (error) {
    console.log(error);
    res.status(404).send('unable to send to the database')
  }
})


// Redirection
  router.get("/itemsPage", async (req, res) => {
    var userlist = await Item.find();
    console.log(userlist)
    res.render("storeItemsPage", {
      items: userlist
    });
  });

router.get("/managerPage", async (req, res) => {
  var userlist = await Manager.find();
  console.log(userlist)
  res.render("managerPage", {
    items: userlist
  });
});
 // deleting data from database
router.post("/delete", async (req, res) => {
  try {
    await Customer.deleteOne({ _id: req.body.id })
    res.redirect('back')
  } catch (error) {
    res.status(400).send("unable to delete from database");
  }
})

  router.post("/deleteemployee", async (req, res) => {
    try {
      await Employee.deleteOne({ _id: req.body.id })
      res.redirect('back')
    } catch (error) {
      res.status(400).send("unable to delete to database");
    }
  })

  router.post("/deleteitem", async (req, res) => {
    try {
      await Item.deleteOne({ _id: req.body.id })
      res.redirect('back')
    } catch (error) {
      res.status(400).send("unable to delete to database");
    }
  })


  router.post("/deletemanager", async (req, res) => {
    try {
      await Manager.deleteOne({ _id: req.body.id })
      res.redirect('back')
    } catch (error) {
      res.status(400).send("unable to delete to database");
    }
  })


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

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname)
  }
})

const upload = multer({storage})

router.post('/itemReg', upload.single('itemPhoto'), async (req, res) => {
  const newItem = new Item()
  newItem.itemName = req.body.itemName;
  newItem.itemMake = req.body.itemMake;
  newItem.entryDate = req.body.entryDate;
  newItem.category = req.body.category;
  newItem.serialNumber = req.body.serialNumber;
  newItem.itemPrice = req.body.itemPrice;
  newItem.initialPay = req.body.initialPay;
  newItem.payInterval = req.body.payInterval;
  newItem.color = req.body.color;
  newItem.itemDescription = req.body.itemDescription;
  newItem.numberInStock = req.body.numberInStock;
  newItem.itemPhoto = req.file.path;

  try {
    await newItem.save()
    res.redirect('/itemsPage')
  } catch (error) {
    console.log(error);
    res.status(404).send('unable to send to the database')
  }
})



module.exports = router;
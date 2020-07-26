const express = require('express');
const router = express.Router()

const path = require('path');
const { read } = require('fs');

// Main login page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/login.html'))
})

router.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/homePage.html'))
})

//Sales Agent Registration Page
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

module.exports = router;
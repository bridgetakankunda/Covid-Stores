const express = require('express');
const router = express.Router()

const path = require('path')

// Main login page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/login.html'))
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




module.exports = router;
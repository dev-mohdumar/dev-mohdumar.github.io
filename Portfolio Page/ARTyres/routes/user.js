const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { createUser } = require('../controllers/userController');

// Creating a user  
router.post('/create-user', createUser);

module.exports = router;

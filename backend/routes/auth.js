const express = require('express');
const { registerController } = require('../controllers/auth');

const router = express.Router();

router.post('/register',registerController);
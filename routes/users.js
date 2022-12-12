var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.js');

/* POST /users/login (admins only) */
router.post('/login', userController.login);

module.exports = router;

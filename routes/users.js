var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.js');
const adminOnlyMw = require('../middleware/adminOnly.js');

/* POST /users/login (admins only) */
router.post('/login', userController.login);

/* PUT /users/changePassword */
router.put('/changePassword', adminOnlyMw, userController.changePassword);

module.exports = router;

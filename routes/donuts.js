var express = require('express');
var router = express.Router();
const donutController = require('../controllers/donuts.js');

/* create a new donut */
router.post('/', donutController);

/* delete a donut */
router.delete('/:id', donutController);



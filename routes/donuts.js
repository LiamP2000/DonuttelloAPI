var express = require('express');
var router = express.Router();
const donutController = require('../controllers/donuts.js');

/* create a new donut */
router.post('/', donutController.create);

/* delete a donut */
router.delete('/:id', donutController.deleteById);

/* get all donuts */
router.get('/', donutController.getAll);

module.exports = router


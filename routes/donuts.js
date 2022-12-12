var express = require('express');
var router = express.Router();
const donutController = require('../controllers/donuts.js');
const adminOnlyMw = require('../middleware/adminOnly.js');

/* create a new donut */
router.post('/', donutController.create);

/* delete a donut */
router.delete('/:id', adminOnlyMw, donutController.deleteById);

/* get all donuts */
router.get('/', donutController.getAll);

/* get a specific donut */
router.get('/:id', donutController.getById);

/* update a donut */
router.put('/:id', adminOnlyMw, donutController.updateById);



module.exports = router


var express = require('express');
var router = express.Router();
const Donut = require("../models/donut");

/* POST /donuts: maak een nieuwe donut aan */
router.post('/', function(req, res) {
    let donut = new Donut(); 
    donut.clientName = "Jana"
    donut.topping = "Choclate"
});

/* DELETE /donuts/{id}: delete een donut */
router.delete('/:id', async function(req, res) {
    let donutId = req.params.id
});

module.exports = router;

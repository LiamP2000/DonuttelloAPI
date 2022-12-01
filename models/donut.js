// require mongoose 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donutSchema = new Schema({
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  topping: { type: String, required: true },
  sprinkles: { type: String, required: true },
  logo: { type: String, required: true }
});

const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;
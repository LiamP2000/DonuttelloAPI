// require mongoose 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donutSchema = new Schema({
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  topping: { type: String, required: true },
  sprinkles: { type: String, required: true },
  logo: { type: String, required: true },
  amount: { type: Number, required: true },
  creationDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
});

const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;
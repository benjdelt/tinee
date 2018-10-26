const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  id: Number,
  longVersion: String,
  shortVersion: String,
  userId: Number,
  createdAt: Date,
  UpdatedAt: Date, 
})

module.exports = mongoose.model('User', urlSchema);
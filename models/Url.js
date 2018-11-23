const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  longVersion: String,
  shortVersion: {
    type: String,
    unique: true,
  },
  user_id: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
  },
  createdAt: Date,
  updatedAt: Date, 
})

module.exports = mongoose.model('Url', urlSchema);
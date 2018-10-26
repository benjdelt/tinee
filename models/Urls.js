const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  longVersion: String,
  shortVersion: String,
  user_id: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
  },
  createdAt: Date,
  UpdatedAt: Date, 
})

module.exports = mongoose.model('Url', urlSchema);
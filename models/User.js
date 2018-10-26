const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  username: String,
  email: String,
  passwordDigest: String,
  avatarUrl: String,
  createdAt: Date,
  UpdatedAt: Date, 
})

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  passwordDigest: String,
  avatarUrl: String,
  createdAt: Date,
  UpdatedAt: Date, 
})

module.exports = mongoose.model('User', userSchema);
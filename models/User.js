const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
      },
    },
    unique: true,
    required: true,
  },
  passwordDigest: {
    type: String,
    required: true,
  },
  avatarUrl: String,
  createdAt: Date,
  UpdatedAt: Date, 
})

module.exports = mongoose.model('User', userSchema);
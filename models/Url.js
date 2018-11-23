const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  longVersion: {
    type: String,
    validate: {
      validator: function(v) {
        return /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(v);
      },
    },
    required: true,
  },
  shortVersion: {
    type: String,
    unique: true,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
  },
  createdAt: Date,
  updatedAt: Date, 
})

module.exports = mongoose.model('Url', urlSchema);
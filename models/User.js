const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  city: { type: String },

  properties: { type: Map, of: String },
});

module.exports = mongoose.model('User', userSchema);

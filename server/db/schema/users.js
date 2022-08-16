const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nis: Number,
  email: String,
  bank: String,
});

module.exports = new Model("user", userSchema);

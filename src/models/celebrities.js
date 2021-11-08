const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelebritieSchema = new Schema({
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: Date,
  votes: {
    positive: Number,
    negative: Number
  }
});

const Celebrities = mongoose.model("celebrities", CelebritieSchema);

module.exports = Celebrities;
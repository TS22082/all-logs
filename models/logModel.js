const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  authorId: { type: String, required: true },
  groupId: { type: String, required: true },
});

module.exports = Log = mongoose.model("log", logSchema);

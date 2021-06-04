const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  authorId: { type: String, required: true },
});

module.exports = Group = mongoose.model("group", groupSchema);

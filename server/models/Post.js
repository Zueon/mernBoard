const mongoose = require("mongoose");
const moment = require("moment");
const date = new Date();

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: String, default: moment().format("YYYY-MM-DD hh:mm:ss") },
  updatedAt: { type: String },
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
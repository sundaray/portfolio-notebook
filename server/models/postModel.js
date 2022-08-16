const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    author: {
      type: String,
      default: "Hemanta Sundaray",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

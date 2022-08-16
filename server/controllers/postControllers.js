const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const fetchAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();

  if (posts) {
    res.json(posts);
  } else {
    res.json([]);
  }
});

module.exports = {
  fetchAllPosts,
};

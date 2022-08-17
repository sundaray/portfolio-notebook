const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const fetchAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  if (posts) {
    res.json(posts);
  } else {
    res.json([]);
  }
});

const createPost = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  const post = await Post.create({ title, body });

  if (post) {
    res.json(post);
  }
});

module.exports = {
  fetchAllPosts,
  createPost,
};

const express = require("express");

const { fetchAllPosts, createPost } = require("../controllers/postControllers");

const router = express.Router();

router.get("/api/posts", fetchAllPosts);
router.post("/api/posts/create", createPost);

module.exports = router;

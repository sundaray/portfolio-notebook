const express = require("express");

const { fetchAllPosts } = require("../controllers/postControllers");

const router = express.Router();

router.get("/api/posts", fetchAllPosts);

module.exports = router;

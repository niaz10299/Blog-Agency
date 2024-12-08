const express = require('express');
const Blog = require('../models/Blog');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new blog
router.post('/', protect, async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;

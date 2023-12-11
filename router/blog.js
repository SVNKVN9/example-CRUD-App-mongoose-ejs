const express = require('express');
const router = express.Router();
const Blog = require('../controllers/Blog')

router.get('/', Blog.get)
router.post('/', Blog.create)
router.put('/:id', Blog.edit)
router.delete('/:id', Blog.remove)

module.exports = router
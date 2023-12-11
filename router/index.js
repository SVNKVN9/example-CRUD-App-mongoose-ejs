const express = require('express');
const router = express.Router();
const BlogRoute = require('./blog')

router.use('/blogs', BlogRoute)

module.exports = router
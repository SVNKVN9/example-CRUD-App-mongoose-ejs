const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

router.get('/', (req, res) => {
    const text = "All Blog"

    Blog.find((err, docs) => {
        if (!err) {
            res.render('pages/index', {
                docs: docs,
            })
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
})

router.post('/post', (req, res) => {
    const blog = new Blog()
    blog.title = req.body.title
    blog.description = req.body.description
    blog.save((err, doc) => {
        if (err) throw err
        
        res.redirect('/');
    });
})

router.get('/edit/:blogId', (req, res) => {
    Blog.findById(req.params.blogId, (err, doc) => {
        if (!err) {
            res.render('pages/edit', {
                doc: doc,
            })
        }
    });
})

router.post('/edit/:blogId', async (req, res) => {
    await Blog.findOneAndUpdate({ _id: req.params.blogId }, { title: req.body.title, description: req.body.description })
    res.redirect('/');
})

router.get('/delete/:blogId', async (req, res) => {
    await Blog.findOneAndDelete({ _id: req.params.blogId })
    res.redirect('/');
})

module.exports = router
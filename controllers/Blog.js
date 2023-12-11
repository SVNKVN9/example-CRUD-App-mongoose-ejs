const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

module.exports.get = async (req, res) => {
    const Blogs = await Blog.find();

    return res.status(200).json(Blogs)
}

module.exports.create = async (req, res) => {
    const blog = new Blog()
    blog.title = req.body.title
    blog.description = req.body.description
    blog.save((error, result) => {
        if (error) return res.status(400).json({ error: error.message })

        return res.status(201).json(result)
    })
}

module.exports.edit = async (req, res) => {
    const result = await Blog.findOneAndUpdate({ _id: req.params.id }, {
        title: req.body.title,
        description: req.body.description
    }, { new: true })

    return res.status(200).json(result)
}

module.exports.remove = async (req, res) => {
    await Blog.findOneAndDelete({ _id: req.params.id })

    return res.status(204).json({})
}
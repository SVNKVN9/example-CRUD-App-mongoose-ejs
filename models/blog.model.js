const mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String
    }
}, { versionKey: false });

mongoose.model('Blog', BlogSchema);
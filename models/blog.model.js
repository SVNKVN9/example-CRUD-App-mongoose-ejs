const mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        required: 'This field is required.',
        type: String
    }
}, { versionKey: false, timestamps: true });

mongoose.model('Blog', BlogSchema);
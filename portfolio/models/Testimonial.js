const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);

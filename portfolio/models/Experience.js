const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String
    },
    description: {
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

module.exports = mongoose.model('Experience', ExperienceSchema);

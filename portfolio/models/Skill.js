const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    items: [{
        type: String
    }],
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Skill', SkillSchema);

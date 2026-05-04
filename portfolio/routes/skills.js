const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET all skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find().sort({ order: 1, createdAt: -1 });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
});

// GET single skill
router.get('/:id', async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch skill' });
    }
});

// POST new skill
router.post('/', async (req, res) => {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create skill' });
    }
});

// PUT update skill
router.put('/:id', async (req, res) => {
    try {
        const skill = await Skill.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json(skill);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update skill' });
    }
});

// DELETE skill
router.delete('/:id', async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete skill' });
    }
});

module.exports = router;

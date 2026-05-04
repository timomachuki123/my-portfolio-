const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// GET all achievements
router.get('/', async (req, res) => {
    try {
        const achievements = await Achievement.find().sort({ order: 1, createdAt: -1 });
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch achievements' });
    }
});

// GET single achievement
router.get('/:id', async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        if (!achievement) {
            return res.status(404).json({ error: 'Achievement not found' });
        }
        res.json(achievement);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch achievement' });
    }
});

// POST new achievement
router.post('/', async (req, res) => {
    try {
        const achievement = new Achievement(req.body);
        await achievement.save();
        res.status(201).json(achievement);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create achievement' });
    }
});

// PUT update achievement
router.put('/:id', async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!achievement) {
            return res.status(404).json({ error: 'Achievement not found' });
        }
        res.json(achievement);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update achievement' });
    }
});

// DELETE achievement
router.delete('/:id', async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndDelete(req.params.id);
        if (!achievement) {
            return res.status(404).json({ error: 'Achievement not found' });
        }
        res.json({ message: 'Achievement deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete achievement' });
    }
});

module.exports = router;

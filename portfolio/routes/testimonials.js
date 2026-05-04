const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET all testimonials
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ order: 1, createdAt: -1 });
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
});

// GET single testimonial
router.get('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.json(testimonial);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch testimonial' });
    }
});

// POST new testimonial
router.post('/', async (req, res) => {
    try {
        const testimonial = new Testimonial(req.body);
        await testimonial.save();
        res.status(201).json(testimonial);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create testimonial' });
    }
});

// PUT update testimonial
router.put('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!testimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.json(testimonial);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update testimonial' });
    }
});

// DELETE testimonial
router.delete('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete testimonial' });
    }
});

module.exports = router;

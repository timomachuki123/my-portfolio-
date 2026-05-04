const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Import Routes
const projectsRoutes = require('./routes/projects');
const testimonialsRoutes = require('./routes/testimonials');
const skillsRoutes = require('./routes/skills');
const experienceRoutes = require('./routes/experience');
const certificationsRoutes = require('./routes/certifications');
const achievementsRoutes = require('./routes/achievements');

// Contact Schema and Model
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

// API Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/achievements', achievementsRoutes);

// Contact Form Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Message received successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// GET all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

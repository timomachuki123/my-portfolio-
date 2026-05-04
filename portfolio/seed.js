const mongoose = require('mongoose');
const Project = require('./models/Project');
const Testimonial = require('./models/Testimonial');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');
const Certification = require('./models/Certification');
const Achievement = require('./models/Achievement');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Seed Data
const seedProjects = [
    {
        title: 'Face Recognition & Detection System',
        description: 'AI-powered face recognition and detection system',
        image: 'images/project1.jpg',
        technologies: ['Python', 'TensorFlow', 'OpenCV'],
        order: 1
    },
    {
        title: 'Customer Support Chatbot',
        description: 'AI chatbot for customer support automation',
        image: 'images/Davi.jpeg',
        technologies: ['Python', 'NLP', 'Machine Learning'],
        order: 2
    },
    {
        title: 'Task Flow – Task Management App',
        description: 'Full-stack task management application',
        image: 'images/profile.jpg',
        technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
        order: 3
    },
    {
        title: 'Website Development',
        description: 'Responsive website development for clients',
        image: 'images/Martine.jpeg',
        technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        order: 4
    }
];

const seedTestimonials = [
    {
        quote: "Timothy's work on our AI chatbot was exceptional. The system reduced our response time significantly and improved customer satisfaction.",
        author: 'Jane Doe',
        position: 'CTO',
        company: 'TechCorp',
        order: 1
    },
    {
        quote: 'A highly motivated developer who delivered a flawless task management app ahead of schedule.',
        author: 'John Smith',
        position: 'CEO',
        company: 'StartUpX',
        order: 2
    }
];

const seedSkills = [
    {
        category: 'Programming Languages',
        items: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'SQL'],
        order: 1
    },
    {
        category: 'AI & Machine Learning',
        items: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'NLP', 'Reinforcement Learning'],
        order: 2
    },
    {
        category: 'Web Development',
        items: ['HTML', 'CSS', 'PHP', 'Node.js', 'Express', 'REST APIs'],
        order: 3
    },
    {
        category: 'Databases',
        items: ['MySQL', 'MongoDB', 'PostgreSQL'],
        order: 4
    },
    {
        category: 'Tools & Platforms',
        items: ['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Anaconda', 'PyCharm'],
        order: 5
    },
    {
        category: 'Other',
        items: ['Agile', 'OOP', 'Data Analysis', 'Problem Solving'],
        order: 6
    }
];

const seedExperience = [
    {
        title: 'Software Development Intern',
        company: 'St. Francis Technical Training Institute',
        location: 'Homabay, Kenya',
        startDate: 'Jun 2024',
        endDate: 'Aug 2024',
        description: 'Collaborated with a 5-member team to develop and maintain backend services using Node.js and Express. Optimized database queries in MySQL, improving system performance by 25%. Participated in bi-weekly Agile sprints, wrote documentation, and performed unit testing with Jest.',
        order: 1
    },
    {
        title: 'Tutor',
        company: 'St. Francis Technical Training Institute',
        location: 'Homabay, Kenya',
        startDate: 'Oct 2025',
        endDate: 'Present',
        description: '',
        order: 2
    },
    {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        location: 'Remote',
        startDate: 'Jan 2025',
        endDate: 'Present',
        description: 'Developed responsive websites for small businesses using HTML, CSS, and JavaScript. Customized WordPress themes and integrated SEO tools to improve client visibility. Communicated directly with clients to gather requirements and deliver projects on time.',
        order: 3
    }
];

const seedCertifications = [
    {
        name: 'Machine Learning',
        issuer: 'Coursera (Andrew Ng, Stanford University)',
        year: '2025',
        order: 1
    },
    {
        name: 'Introduction to TensorFlow for AI, ML, and Deep Learning',
        issuer: 'Coursera',
        year: 'In progress',
        order: 2
    },
    {
        name: 'Kectil Community Project',
        issuer: '',
        year: '',
        order: 3
    },
    {
        name: 'Unashamed Charity Organization Rongo Branch',
        issuer: '"Chairperson"',
        year: '',
        order: 4
    },
    {
        name: 'Africa for SDG\'s Rongo Branch',
        issuer: 'Treasurer',
        year: '',
        order: 5
    },
    {
        name: 'Integrity Club Rongo Branch',
        issuer: '',
        year: '',
        order: 6
    },
    {
        name: 'Sustainable Living Challenge by The UN',
        issuer: '',
        year: '',
        order: 7
    }
];

const seedAchievements = [
    {
        title: 'Hackathon – Kisumu Zone One Hack 2024',
        description: 'Developed a platform for food donation.',
        order: 1
    },
    {
        title: 'Africa for SDG\'s leader',
        description: 'Treasurer 2024/2025; Fellow in International Christian Youth (ICY).',
        order: 2
    },
    {
        title: 'Unashamed Charity Group (Rongo Branch)',
        description: 'Media coordinator 2023/2024; Chairperson 2024/2025.',
        order: 3
    },
    {
        title: 'Google Developers Group (Rongo University Branch)',
        description: 'Organized coding bootcamps and peer programming sessions mainly in AI & ML.',
        order: 4
    },
    {
        title: 'Volunteer Tutor (YSK Program)',
        description: 'Taught introductory Python to high school students at local STEM outreach program in Migori County.',
        order: 5
    },
    {
        title: 'Google Developers Group (Devfest 2025 Kisii)',
        description: 'Member of organizing committee (logistics).',
        order: 6
    }
];

// Seed Function
async function seedDatabase() {
    try {
        // Clear existing data
        await Project.deleteMany({});
        await Testimonial.deleteMany({});
        await Skill.deleteMany({});
        await Experience.deleteMany({});
        await Certification.deleteMany({});
        await Achievement.deleteMany({});

        console.log('Cleared existing data');

        // Insert seed data
        await Project.insertMany(seedProjects);
        console.log('Projects seeded');

        await Testimonial.insertMany(seedTestimonials);
        console.log('Testimonials seeded');

        await Skill.insertMany(seedSkills);
        console.log('Skills seeded');

        await Experience.insertMany(seedExperience);
        console.log('Experience seeded');

        await Certification.insertMany(seedCertifications);
        console.log('Certifications seeded');

        await Achievement.insertMany(seedAchievements);
        console.log('Achievements seeded');

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

// Run seed function
seedDatabase();

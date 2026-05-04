# Portfolio Database Integration

This document explains how to set up and use the MongoDB database integration for the portfolio website.

## Prerequisites

1. **Node.js** - Install Node.js from <https://nodejs.org/>
2. **MongoDB** - Install MongoDB Community Edition from <https://www.mongodb.com/try/download/community>

## Setup Instructions

### 1. Install Dependencies

Navigate to the portfolio directory and install the required npm packages:

```bash
cd portfolio
npm install
```

### 2. Start MongoDB

Make sure MongoDB is running on your system. The default connection string is `mongodb://localhost:27017/portfolio`.

**Windows:**

```bash
mongod
```

**macOS/Linux:**

```bash
sudo systemctl start mongod
# or
mongod
```

### 3. Seed the Database

Populate the database with initial portfolio data:

```bash
npm run seed
```

This will create the following collections in the `portfolio` database:

- `projects` - Portfolio projects
- `testimonials` - Client testimonials
- `skills` - Technical skills by category
- `experience` - Work experience
- `certifications` - Professional certifications
- `achievements` - Achievements and leadership roles
- `contacts` - Contact form submissions

### 4. Start the Server

Start the Express server:

```bash
npm start
```

The server will run on <http://localhost:3000>

### 5. Access the Website

Open your browser and navigate to:

```text
http://localhost:3000
```

## API Endpoints

The following REST API endpoints are available:

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Testimonials

- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get a specific testimonial
- `POST /api/testimonials` - Create a new testimonial
- `PUT /api/testimonials/:id` - Update a testimonial
- `DELETE /api/testimonials/:id` - Delete a testimonial

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a specific skill category
- `POST /api/skills` - Create a new skill category
- `PUT /api/skills/:id` - Update a skill category
- `DELETE /api/skills/:id` - Delete a skill category

### Experience

- `GET /api/experience` - Get all experiences
- `GET /api/experience/:id` - Get a specific experience
- `POST /api/experience` - Create a new experience
- `PUT /api/experience/:id` - Update an experience
- `DELETE /api/experience/:id` - Delete an experience

### Certifications

- `GET /api/certifications` - Get all certifications
- `GET /api/certifications/:id` - Get a specific certification
- `POST /api/certifications` - Create a new certification
- `PUT /api/certifications/:id` - Update a certification
- `DELETE /api/certifications/:id` - Delete a certification

### Achievements

- `GET /api/achievements` - Get all achievements
- `GET /api/achievements/:id` - Get a specific achievement
- `POST /api/achievements` - Create a new achievement
- `PUT /api/achievements/:id` - Update an achievement
- `DELETE /api/achievements/:id` - Delete an achievement

### Contact

- `POST /api/contact` - Submit a contact form
- `GET /api/contacts` - Get all contact submissions (admin)

## Database Schema

### Project

```javascript
{
  title: String (required),
  description: String (required),
  image: String (required),
  technologies: [String],
  link: String,
  order: Number,
  createdAt: Date
}
```

### Testimonial

```javascript
{
  quote: String (required),
  author: String (required),
  position: String (required),
  company: String,
  order: Number,
  createdAt: Date
}
```

### Skill

```javascript
{
  category: String (required),
  items: [String],
  order: Number,
  createdAt: Date
}
```

### Experience

```javascript
{
  title: String (required),
  company: String (required),
  location: String,
  startDate: String (required),
  endDate: String,
  description: String,
  order: Number,
  createdAt: Date
}
```

### Certification

```javascript
{
  name: String (required),
  issuer: String,
  year: String,
  order: Number,
  createdAt: Date
}
```

### Achievement

```javascript
{
  title: String (required),
  description: String,
  order: Number,
  createdAt: Date
}
```

### Contact

```javascript
{
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

## Adding New Data

### Using the API

You can add new data using curl or any HTTP client:

```bash
# Add a new project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Project",
    "description": "Project description",
    "image": "images/project.jpg",
    "technologies": ["React", "Node.js"],
    "order": 5
  }'
```

### Using the Seed Script

To reset the database to initial data, run:

```bash
npm run seed
```

## Troubleshooting

### MongoDB Connection Error

If you see "Error connecting to MongoDB", ensure:

1. MongoDB is running
2. The connection string is correct in `server.js`
3. MongoDB is listening on port 27017

### Port Already in Use

If port 3000 is already in use, change the `PORT` variable in `server.js`:

```javascript
const PORT = 3001; // or any other available port
```

### CORS Issues

If you encounter CORS issues, the server is already configured with the `cors` middleware. Ensure you're accessing the site through `http://localhost:3000`.

## File Structure

```
portfolio/
├── models/
│   ├── Project.js
│   ├── Testimonial.js
│   ├── Skill.js
│   ├── Experience.js
│   ├── Certification.js
│   └── Achievement.js
├── routes/
│   ├── projects.js
│   ├── testimonials.js
│   ├── skills.js
│   ├── experience.js
│   ├── certifications.js
│   └── achievements.js
├── server.js
├── seed.js
├── package.json
├── index.html
├── styles.css
└── DATABASE_README.md
```

## Benefits of Database Integration

1. **Dynamic Content** - Update portfolio content without editing HTML
2. **Admin Panel Ready** - API endpoints ready for an admin interface
3. **Contact Management** - Store and retrieve contact form submissions
4. **Scalability** - Easy to add new sections or modify existing ones
5. **Separation of Concerns** - Data separated from presentation

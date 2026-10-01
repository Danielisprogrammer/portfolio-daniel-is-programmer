const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin2026';

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

// ============ SKILLS ROUTES ============

// GET all skills
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { category: 'asc' }
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills', details: error.message });
  }
});

// POST create skill (protected)
app.post('/api/skills', async (req, res) => {
  try {
    const { password, name, category, level, icon } = req.body;
    
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized: Invalid password' });
    }

    if (!name || !category) {
      return res.status(400).json({ error: 'Name and category are required' });
    }

    const skill = await prisma.skill.create({
      data: {
        name,
        category,
        level: level || 1,
        icon: icon || null
      }
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create skill', details: error.message });
  }
});

// DELETE skill (protected)
app.delete('/api/skills/:id', async (req, res) => {
  try {
    const { password } = req.body;
    
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized: Invalid password' });
    }

    const { id } = req.params;
    await prisma.skill.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete skill', details: error.message });
  }
});

// ============ PROJECTS ROUTES ============

// GET all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects', details: error.message });
  }
});

// POST create project (protected)
app.post('/api/projects', async (req, res) => {
  try {
    const { password, title, description, category, badge, githubUrl, liveUrl, imageUrl, featured, gradient, techs, startDate, endDate } = req.body;
    
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized: Invalid password' });
    }

    if (!title || !description || !category) {
      return res.status(400).json({ error: 'Title, description, and category are required' });
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        category,
        badge: badge || null,
        githubUrl: githubUrl || null,
        liveUrl: liveUrl || null,
        imageUrl: imageUrl || null,
        featured: featured || false,
        gradient: gradient || 'from-indigo-600 via-purple-600 to-pink-600',
        techs: JSON.stringify(techs || []),
        startDate: startDate || null,
        endDate: endDate || null
      }
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project', details: error.message });
  }
});

// DELETE project (protected)
app.delete('/api/projects/:id', async (req, res) => {
  try {
    const { password } = req.body;
    
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized: Invalid password' });
    }

    const { id } = req.params;
    await prisma.project.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project', details: error.message });
  }
});

// ============ CONTACT ROUTE ============

// POST contact form (stores message or sends notification)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // In production, you would send an email or store in database
    console.log(`New contact message from ${name} (${email}): ${message}`);
    
    res.json({ message: 'Message received successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message', details: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio API server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

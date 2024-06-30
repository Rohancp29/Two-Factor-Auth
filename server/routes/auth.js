
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Successful registration
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Registration failed' });
  }
});

module.exports = router;

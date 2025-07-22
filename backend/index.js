const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const Complaint = require('./schema');
const User = require('./userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// 🔹 MIDDLEWARES
app.use(cors());
app.use(express.json());

// 🔹 Connect to MongoDB
connectDB();

// 🔹 Complaint Submission Route
app.post('/submit', async (req, res) => {
  const { name, email, complaint } = req.body;
  try {
    const newComplaint = new Complaint({ name, email, complaint });
    await newComplaint.save();
    res.json({ message: '✅ Complaint submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// 🔹 Register Route (updated to save userType)
app.post('/register', async (req, res) => {
  const { name, email, password, userType } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, userType });
    await newUser.save();

    res.json({ message: '✅ Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// 🔹 Login Route (updated to return name and userType)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

    res.json({
      message: '✅ Login successful',
      token,
      name: user.name,
      userType: user.userType // ✅ Send userType to frontend
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// 🔹 Get All Users (Admin Dashboard)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// 🔹 Get All Complaints (Admin View)
app.get('/all-complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    console.error('Error fetching complaints:', err);
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
});

// 🔹 Get Complaints by Email (User Status View)
app.get('/my-complaints', async (req, res) => {
  const { email } = req.query;
  try {
    const complaints = await Complaint.find({ email });
    res.json(complaints);
  } catch (err) {
    console.error('Error fetching user complaints:', err);
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
});

// 🔹 Start the server
app.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});

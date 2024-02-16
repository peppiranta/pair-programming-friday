const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const generateToken = require("../middleware/jwt");
const jwt = require("jsonwebtoken");

// Create a new token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// Create new user
const createUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = new User({ username, password, hashedPassword });
  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
};

// Authenticate user
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = createToken(user._id);

  res.status(200).json({ message: "Authentication successful", token });
};

// Get all users
const getUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json(allUsers);
};

// Delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted successfully" });
};
module.exports = {
  createUser,
  loginUser,
  getUsers,
  deleteUser,
};

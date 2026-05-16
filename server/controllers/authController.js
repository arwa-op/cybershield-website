const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Generate JWT

const generateToken = (id) => {
  return jwt.sign(
    { id },

    process.env.JWT_SECRET,

    {
      expiresIn: "7d",
    }
  );
};

// Register User

const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    // Validation

    if (
      !name ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Check Existing User

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists",
      });
    }

    // Hash Password

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    // Create User

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Response

    res.status(201).json({
      _id: user._id,

      name: user.name,

      email: user.email,

      token: generateToken(user._id),
    });
  }

  catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

// Login User

const loginUser = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    // Validation

    if (!email || !password) {
      return res.status(400).json({
        error:
          "Email and password required",
      });
    }

    // Find User

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        error: "Invalid credentials",
      });
    }

    // Compare Password

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        error: "Invalid credentials",
      });
    }

    // Success Response

    res.json({
      _id: user._id,

      name: user.name,

      email: user.email,

      token: generateToken(user._id),
    });
  }

  catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
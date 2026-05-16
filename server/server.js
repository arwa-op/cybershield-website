require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const scanRoutes = require("./routes/scanRoutes");
const authRoutes = require("./routes/authRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect MongoDB

connectDB();

// Middleware

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cybershield-website-two.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use(loggerMiddleware);

// Routes

app.use("/", scanRoutes);
app.use("/auth", authRoutes);

// Test Route

app.get("/", (req, res) => {
  res.json({
    message: "CyberShield Backend Running",
  });
});

// Start Server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
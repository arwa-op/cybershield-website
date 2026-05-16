const { protect,
} = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
  scanThreat,
  getThreatReports,
} = require("../controllers/scanControllers");

// Scan Route

router.post("/scan", protect, scanThreat);

// Reports Route

router.get("/reports",protect, getThreatReports);

module.exports = router;
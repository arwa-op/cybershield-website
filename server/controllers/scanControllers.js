const ThreatReport = require("../models/ThreatReport");

// Scan Threat Controller

const scanThreat = async (req, res) => {
  try {
    const { input } = req.body;

    // Validation

    if (!input || typeof input !== "string") {
      return res.status(400).json({
        error: "Valid text input is required",
      });
    }

    const text = input.toLowerCase();

    let risk = 0;

    let triggers = [];

    let detectedCategories = [];

    // Threat Categories

    const categories = [
      {
        name: "Financial Scam",

        keywords: [
          "lottery",
          "winner",
          "reward",
          "free money",
          "earned",
          "10k",
          "payment",
          "cash prize",
        ],

        risk: 30,

        trigger:
          "Financial reward manipulation detected",
      },

      {
        name: "Credential Theft",

        keywords: [
          "password",
          "otp",
          "bank",
          "verify account",
          "login",
          "credit card",
          "bank details",
        ],

        risk: 40,

        trigger:
          "Sensitive credential request detected",
      },

      {
        name: "Urgency Manipulation",

        keywords: [
          "urgent",
          "immediately",
          "act now",
          "limited time",
          "verify now",
        ],

        risk: 20,

        trigger:
          "Urgency pressure tactics identified",
      },

      {
        name: "Social Engineering",

        keywords: [
          "click here",
          "trusted",
          "official",
          "security alert",
          "confirm identity",
        ],

        risk: 15,

        trigger:
          "Social engineering behavior detected",
      },
    ];

    // Analyze Categories

    categories.forEach((category) => {
      let matched = false;

      category.keywords.forEach((keyword) => {
        if (text.includes(keyword)) {
          risk += category.risk;

          matched = true;
        }
      });

      if (matched) {
        detectedCategories.push(category.name);

        triggers.push(category.trigger);
      }
    });

    // Limit Risk Score

    if (risk > 100) {
      risk = 100;
    }

    // Default Safe Response

    let title = "Content Appears Safe";

    let description =
      "No strong scam indicators were detected in the provided content.";

    // Dynamic Threat Levels

    if (risk >= 80) {
      title = "High Risk Scam Detected";

      description =
        "This content contains multiple indicators commonly associated with phishing, credential theft, or financial scams.";
    }

    else if (risk >= 50) {
      title = "Suspicious Content Detected";

      description =
        "Several suspicious manipulation patterns were identified.";
    }

    else if (risk >= 25) {
      title = "Potential Risk Detected";

      description =
        "Some risky language patterns were identified.";
    }

    // Safe Content

    if (triggers.length === 0) {
      triggers.push(
        "No phishing indicators detected",
        "No manipulation patterns identified",
        "Content appears relatively safe"
      );

      detectedCategories.push("Safe Content");
    }

    // Final Response Data

    const responseData = {
      risk,
      title,
      description,
      triggers,
      categories: detectedCategories,

    };

    // Save Threat Report

    await ThreatReport.create({
      input,

      risk: responseData.risk,

      title: responseData.title,

      description: responseData.description,

      triggers: responseData.triggers,

      categories: responseData.categories,

      user: req.user._id,
    });

    // Send Response

    res.json(responseData);
  }

  catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

// Get All Threat Reports

const getThreatReports = async (req, res) => {
  try {
    const reports = await ThreatReport.find({user: req.user._id,})
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(reports);
  }

  catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to fetch reports",
    });
  }
};

module.exports = {
  scanThreat,
  getThreatReports,
};
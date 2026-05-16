const mongoose = require("mongoose");

const threatReportSchema =
  new mongoose.Schema(
    {
      input: {
        type: String,
        required: true,
      },

      risk: {
        type: Number,
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      triggers: [String],

      categories: [String],

      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },
    },

    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "ThreatReport",
  threatReportSchema
);
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    category: {
      type: String,
      enum: ["Lost", "Found"],
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    contactName: {
      type: String,
      required: true,
    },

    contactNumber: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Active", "Resolved"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, "Job title is required"],
  },
  jobDesc: {
    type: String,
    required: false,
    default: "No description provided",
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  link: {
    type: String,
    required: [true, "Link is required"],
  },
  location: {
    type: String,
    default: "Auckland",
  },
});

module.exports = mongoose.model("Job", JobSchema);

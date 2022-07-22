const express = require("express");
const router = express.Router();
const { getAllJobs, createJobs } = require("../controllers/jobs.controllers");

router.route("/jobs").get(getAllJobs).post(createJobs);

module.exports = router;

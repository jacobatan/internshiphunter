const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  createJobs,
  getAllJobsStatic,
} = require("../controllers/jobs.controllers");
const { getGifs, sendGifs } = require("../controllers/gifs.controllers");

router.route("/jobs").get(getAllJobs).post(createJobs);
router.route("/jobs/static").get(getAllJobsStatic);
router.route("/gifs").get(getGifs).post(sendGifs);

module.exports = router;

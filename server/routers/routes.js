const express = require("express");
const router = express.Router();
const { getAllJobs, createJobs } = require("../controllers/jobs.controllers");
const{getGifs, sendGifs} = require("../controllers/gifs.controllers");

router.route("/jobs").get(getAllJobs).post(createJobs);
router.route("/gifs").get(getGifs).post(sendGifs);

module.exports = router;

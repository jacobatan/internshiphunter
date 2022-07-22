const Job = require("../models/Job.models");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  const allJobs = await Job.find({});
  res.status(StatusCodes.OK).send(allJobs);
};

const createJobs = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).send(job);
};

module.exports = { getAllJobs, createJobs };

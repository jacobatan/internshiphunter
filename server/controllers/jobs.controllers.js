const Job = require("../models/Job.models");
const { StatusCodes } = require("http-status-codes");

const getAllJobsStatic = async (req, res) => {
  const allJobs = await Job.find({});
  res.status(StatusCodes.OK).send(allJobs);
};

const getAllJobs = async (req, res) => {
  const { field, location } = req.query;
  const queryObject = {};

  // if (type) {
  //   queryObject["jobTitle"] = { $regex: type, $options: "i" };
  // }

  if (field) {
    queryObject["field"] = { $regex: field, $options: "i" };
  }

  if (location) {
    queryObject["location"] = { $regex: location, $options: "i" };
  }

  const allJobs = await Job.find(queryObject);
  res.status(StatusCodes.OK).send(allJobs);
};

const createJobs = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).send(job);
};

module.exports = { getAllJobs, createJobs, getAllJobsStatic };

// node/express

const Job = require("./models/Job.models");

require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

// DB stuff
const connectDB = require("./db/connect");

// routers
const routers = require("./routers/routes");

// express setup
const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api", routers);

const port = process.env.PORT || 3000;

// ayaan moment
const axios = require("axios");
const ayaan = require("./info.json");
const hackyPost = async (ayaanPayload) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/jobs",
      ayaanPayload
    );
  } catch (error) {
    console.log(error);
  }
};
const ayaanFunction = async () => {
  await Job.deleteMany();
  ayaan.map((smallAyaan) => {
    hackyPost(smallAyaan);
  });
};
// ayaan moment ends

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
    // ayaanFunction();
  } catch (error) {
    console.log(error);
  }
};

start();

// ---------------------------------------------------------------

// python stuff
const { spawn } = require("child_process");
const py = spawn("python3", ["./python/index.py", "apple sauce!"]);

py.stdout.on("data", (data) => {
  console.log(data.toString());
});

py.on("close", (code) => {
  console.log(`child process exited with code${code}`);
});

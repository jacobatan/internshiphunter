// node/express

require("dotenv").config();
require("express-async-errors");

// DB stuff
const connectDB = require("./db/connect");

// routers
const routers = require("./routers/routes");

// express setup
const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api", routers);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
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

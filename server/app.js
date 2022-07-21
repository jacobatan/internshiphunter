const { spawn } = require("child_process");
const py = spawn("python3", ["./python/index.py", "apple sauce!"]);

py.stdout.on("data", (data) => {
  console.log(data.toString());
});

py.on("close", (code) => {
  console.log(`child process exited with code${code}`);
});

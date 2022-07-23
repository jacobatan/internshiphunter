const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    gifURL: {
      type: String,
      required: [true, "gifURL required"],
    },
    
});
  
  module.exports = mongoose.model("Gifs", JobSchema);
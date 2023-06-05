const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
  kepler_name: {
    type: String,
    required: true,
  },
});

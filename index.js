"use strict";
const server = require("./src/server");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(mongoUri, options).then(() => {
  server.start(port);
});

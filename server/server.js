const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5500;
const { ATLAS_URI } = process.env;

const app = express();

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // 리퀘스트 바디의 json을 해석

// route config
app.use("/posts", require("./routes/posts"));

// connect to mongoDB server
mongoose.connect(ATLAS_URI).then(() => {
  console.log("Successfully connected to mongodb");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

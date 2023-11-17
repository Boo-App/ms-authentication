const mongoose = require("mongoose");
require('dotenv').config();

// const mongoUri =
//   `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@users.pnxzv.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const mongoUri =
  `mongodb://localhost:27017/quizz`;

const uri = encodeURI(String(mongoUri));
const mongoConnection = mongoose.connect(uri);

module.exports = mongoConnection;
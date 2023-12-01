const mongoose = require("mongoose")
require('dotenv').config();
const mongoUri =
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@clustertest.i9bfzu2.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

  console.log('6', mongoUri)
const uri = encodeURI(String(mongoUri));
const mongoConnection = mongoose.connect(uri);

export default mongoConnection
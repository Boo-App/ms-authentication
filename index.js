const { register } = require('node:module');
const { pathToFileURL } = require('node:url');
const express = require("express");

const mongoConnection = require("./db/clientMongo.ts");

const cors = require("cors");
register('ts-node/esm', pathToFileURL('./'));

const app = express();
const _mongoConnection = mongoConnection;
// const usersService = new UserService();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
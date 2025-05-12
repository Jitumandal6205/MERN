//core module

const path = require("path");

// External Module
const express = require('express');
const userRouter = express.Router();

// local module
const rootDir = require("../utils/pathUtil");
userRouter.get("/",(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'Home.html'));
  });

  module.exports = userRouter;
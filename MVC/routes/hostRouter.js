const express = require("express");

const hostRouter = express.Router();
const homesController = require("../controllers/homes");

// // Local Module
// const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", homesController.getAddHome);

hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;

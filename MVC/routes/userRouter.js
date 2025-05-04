const express = require("express");
const userRouter = express.Router();
const homescontroller = require("../controllers/homes");

userRouter.get("/", homescontroller.getHome);

module.exports = userRouter;

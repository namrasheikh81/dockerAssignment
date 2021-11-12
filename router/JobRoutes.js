const express = require("express");
const job_controller = require("../controller/job_controller");
const jobRoute = express.Router();

jobRoute.route("/JobPostRoutes").post(job_controller.addPost);

module.exports = jobRoute;
const express = require("express");
const c_serviceProvider = require("../controller/c_servericeProvider");
const r_serviceProvider = express.Router();

r_serviceProvider
  .route("/serviceProvider")
  .post(c_serviceProvider.addProvider)
  .get(c_serviceProvider.allProviders);

r_serviceProvider
  .route("/serviceProvider/:id")
  .get(c_serviceProvider.getServiceProviderById);

//   .patch(memberController.updateMemberByID);
module.exports = r_serviceProvider;

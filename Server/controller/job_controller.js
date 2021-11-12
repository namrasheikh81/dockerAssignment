const Job = require("../model/Post");
const ServiceProvider = require("../model/ServiceProivder");
const {newJobNotification}= require("../utils/notificationActions");

exports.addPost = async function (req, res) {
    try {
      const custId= req.body.customerId;
      const title= req.body.title;
      const JobPost = await Job.create(req.body);
      
      var serviceProviders = await ServiceProvider.find({
        skill: { $in: req.body.skills }
      });
      
      if(!serviceProviders){
        res.status(404).send('Service Providers with such skills not found');
     }
     else{
      await newJobNotification( JobPost._id, serviceProviders, custId, title );
     }

      res.status(201).json({
        status: "success",
        data: {
          post_created: JobPost,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: "Job posting unsuccessful",
        message: e,
      });
    }
  };

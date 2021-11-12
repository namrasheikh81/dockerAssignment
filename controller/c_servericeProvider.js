const ServiceProivder = require("../model/ServiceProivder");

// Methods
// addProvider
// allProviders
// getMemeberByID
// updateMemberByID
// addMember

exports.addProvider = async function (req, res) {
  try {
    const serviceProvider = await ServiceProivder.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        servce_provider: serviceProvider,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

// get All memebers
exports.allProviders = async function (req, res) {
  try {
    var serviceProvider = await ServiceProivder.find();
    const allProviders = Object.keys(serviceProvider).length;
    res.status(201).json({
      status: "success",
      total: allProviders,
      data: {
        providers: serviceProvider,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getServiceProviderByEmail = async function (req, res) {
  try {
    var serviceProvider = await ServiceProivder.find({
      email: req.body.email,
      password: req.body.password,
    }).exec();
    res.status(201).json({
      status: "success",
      exist: serviceProvider != "" ? true : false,
      data: {
        provider: serviceProvider,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
exports.getServiceProviderById = async function (req, res) {
  try {
    var serviceProvider = await ServiceProivder.find({
      _id: req.params.id,
    }).exec();
    res.status(201).json({
      status: "success",
      exist: serviceProvider != "" ? true : false,
      data: {
        provider: serviceProvider,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
exports.searchServiceProvider = async function (req, res) {
  try {
    console.log(req.body);
    var serviceProvider = await ServiceProivder.find({
      skill: { $in: req.body.skills },
      city: req.body.city,
    })
      .sort({ rating: -1 })
      .exec();

      console.log(serviceProvider._id);

    res.status(201).json({
      status: "success",
      exist: serviceProvider != "" ? true : false,
      total: Object.keys(serviceProvider).length,
      data: {
        provider: serviceProvider,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};


exports.searchServiceProviderBySkills = async function (req, res) {
  
  try {
    console.log(req.body);
    var serviceProvider = await ServiceProivder.find({
      skill: { $in: req.body.skills },
    })
      .sort({ rating: -1 })
      .exec();

    res.status(201).json({
      status: "success",
      exist: serviceProvider != "" ? true : false,
      total: Object.keys(serviceProvider).length,
      data: {
        provider: serviceProvider,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

// exports.updateMemberByID = async function (req, res) {
//   try {
//     var members = await Committe_Member.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.status(201).json({
//       status: "success",
//       data: {
//         member: members,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data fail to add in the Database........",
//     });
//   }
// };

const patientSchema = require("../../models/patient");
const moment = require("moment");

const CreatePatient = (req, res) => {
  let request = req.body;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const Role = req.authData.result.Role;
  const userId = req.authData.result._id;

  patientSchema
    .findOne({ createdAt: { $gte: today } })
    .sort({ $natural: -1 })
    .limit(1)
    .exec(function(err, result) {
      if (result == null) {
        request.patientData.TokenNumber = 1;
      } else {
        request.patientData.TokenNumber = result.TokenNumber + 1;
      }

      request.patientData.UserId = userId;

      addPatient = new patientSchema(request.patientData);

      addPatient.save((err, result) => {
        if (err) {
          res.status(403).json({ error: err });
        } else {
          res.status(200).json({
            message: "Patient created successfully",
            result: result
          });
        }
      });
    });
};

const GetPatient = (req, res) => {
  const request = req.body;

  let query = {
    PatientName: request.GetPatientData.PatientName
  };

  patientSchema.aggregate(
    [
      { $match: query },
      {
        $group: {
          _id: "$PatientName",
          totalPatient: { $sum: 1 },
          totalAmount: { $sum: "$Price" }
        }
      }
    ],
    (err, result) => {
      if (result != "") {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            result: result
          });
          // console.log(result);
        }
      } else {
        res.status(403).json({
          error: "No record found"
        });
      }
    }
  );
};

const GetTodayPatient = (req, res) => {
  var start = moment().startOf("day"); // set to 12:00 am today
  var end = moment().endOf("day"); // set to 23:59 pm today

  patientSchema.find(
    { createdAt: { $gte: start, $lt: end } },
    (err, result) => {
      if (result != "") {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            result: result,
            totalRecords: result.length,
            totalTokens: result.length
          });
          // console.log(result);
        }
      } else {
        res.status(403).json({
          error: "No record found"
        });
      }
    }
  );
};

const GetPatientByMonth = (req, res) => {
  const request = req.body;

  var month = request.month;

  const monthQuery = [
    {
      $project: {
        month: { $month: "$createdAt" }
      }
    },
    {
      $match: {
        month: month
      }
    }
  ];
  patientSchema.aggregate(monthQuery, function(err, result) {
    if (result != "") {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          result: result
        });
        // console.log(result);
      }
    } else {
      res.status(403).json({
        error: "No record found"
      });
    }
  });
};

const GetPatientByYear = (req, res) => {
  const request = req.body;

  var Year = request.year;

  const yearQuery = [
    {
      $project: {
        year: { $year: "$createdAt" }
      }
    },
    {
      $match: {
        year: Year
      }
    }
  ];
  patientSchema.aggregate(yearQuery, function(err, result) {
    if (result != "") {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          result: result
        });
        // console.log(result);
      }
    } else {
      res.status(403).json({
        error: "No record found"
      });
    }
  });
};

const GetPatientBetweenDate = (req, res) => {
  const request = req.body;

  var start = moment().startOf("day"); // set to 12:00 am today
  var end = moment().endOf("day"); // set to 23:59 pm today

  var maxDate = moment(request.startDate);
  maxDate = maxDate.format(); // "2014-09-08T08:02:17-05:00"

  var minDate = moment(request.endDate);
  minDate = minDate.format(); // "2014-09-08T08:02:17-05:00"

  patientSchema.find(
    { createdAt: { $gte: maxDate, $lte: minDate } },
    (err, result) => {
      if (result != "") {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            result: result,
            totalRecords: result.length,
            totalTokens: result.length
          });
          // console.log(result);
        }
      } else {
        res.status(403).json({
          error: "No record found"
        });
      }
    }
  );
};

const GetPatientByRole = (req, res) => {
  const request = req.body;

  // const UserId = request.UserId;

  const matchQuery = {
    $match: { UserId: "5d6d3a392d7fc931d8bbbc57" }
  };

  // const groupQuery = {
  //   $group: { _id: UserId, TotalSale: { $sum: "$Price" } }
  // };

  patientSchema.aggregate([matchQuery], (err, result) => {
    if (result != "") {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          result: result
        });
        // console.log(result);
      }
    } else {
      res.status(403).json({
        error: "No record found"
      });
    }
  });
};

module.exports = {
  CreatePatient,
  GetPatient,
  GetTodayPatient,
  GetPatientBetweenDate,
  GetPatientByRole,
  GetPatientByYear,
  GetPatientByMonth
};

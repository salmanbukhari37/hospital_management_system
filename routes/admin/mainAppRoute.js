const express = require("express");
const router = express.Router();

// Login Controller
const UserController = require("../../controllers/Admin/UserController");
const LoginController = require("../../controllers/Admin/LoginController");

// Token Controller
const PatientController = require("../../controllers/Admin/PatientController");

// Login Routes
router.post("/login", LoginController.Login);

// User Routes
router.post("/create-user", UserController.CreateUser);
router.put("/update-user", UserController.UpdateUser);
router.delete("/delete-user", UserController.DeleteUser);

// Generate Token
router.post("/create-patient", PatientController.CreatePatient);

// Get Patient Data
router.post("/get-patient", PatientController.GetPatient);

router.get("/get-today-patient", PatientController.GetTodayPatient);

// Get Patient by Year
router.post("/get-patient-by-year", PatientController.GetPatientByYear);

// Get Patient by Month
router.post("/get-patient-by-month", PatientController.GetPatientByMonth);

router.post(
  "/get-patient-between-date",
  PatientController.GetPatientBetweenDate
);

router.post("/get-patient-by-role", PatientController.GetPatientByRole);

module.exports = {
  router
};

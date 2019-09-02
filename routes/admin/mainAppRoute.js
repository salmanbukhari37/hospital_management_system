const express = require("express");
const router = express.Router();

// Login Controller
const UserController = require("../../controllers/Admin/UserController");

// User Routes
router.post("/create-user", UserController.CreateUser);
router.put("/update-user", UserController.UpdateUser);

module.exports = {
  router
};

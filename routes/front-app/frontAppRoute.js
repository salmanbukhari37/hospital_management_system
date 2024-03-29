const express = require("express");
const router = express.Router();

// Login Controller
const LoginController = require("../../controllers/Front/LoginController");

// Login using JWT
router.post("/login", LoginController.Login);

module.exports = {
  router
};

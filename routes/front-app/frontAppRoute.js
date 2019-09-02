const express = require("express");
const router = express.Router();

// Login Controller
const LoginController = require("../../controllers/Front/LoginController");

router.get("/login", LoginController.Login);

module.exports = {
  router
};

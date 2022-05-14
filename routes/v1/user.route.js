const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validation/user.validation");
const userController = require("../../controllers/user.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(validate(userValidation.getUsers), userController.getUsers)
  .post(validate(userValidation.createUser), userController.createUser);

router
  .route("/:userId")
  .get(validate(userValidation.getUser), userController.getUser)
  .delete(validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;

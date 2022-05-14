const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validation/user.validation");
const userController = require("../../controllers/user.controller");
const addressValidation = require("../../validation/address.validation");
const auth = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(userController.getUsers)
  .post(validate(userValidation.createUser), userController.createUser);

router
  .route("/:userId")
  .get(validate(userValidation.getUser), userController.getUser)
  .delete(validate(userValidation.deleteUser), userController.deleteUser);

router
  .route("/:userId/address")
  .get(auth(), userController.getAddresses)
  .post(
    auth(),
    validate(addressValidation.createAddress),
    userController.createAddress
  );

router
  .route("/:userId/address/:addressId")
  .get(
    auth(),
    validate(addressValidation.getAddressById),
    userController.getAddressById
  )
  .put(
    auth(),
    validate(addressValidation.updateAddress),
    userController.updateAddress
  )
  .delete(
    auth(),
    validate(addressValidation.deleteAddress),
    userController.deleteAddress
  );

module.exports = router;

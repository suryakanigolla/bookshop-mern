const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const orderController = require("../../controllers/order.controller");
const orderValidation = require("../../validation/order.validation");

const router = express.Router();

router
  .route("/")
  .get(auth(), orderController.getOrders)
  .post(
    auth(),
    validate(orderValidation.createOrder),
    orderController.createOrder
  );
router
  .route("/:orderId")
  .get(auth(), validate(orderValidation.getOrder), orderController.getOrder)
  .delete(
    auth(),
    validate(orderValidation.deleteOrder),
    orderController.deleteOrder
  );

module.exports = router;

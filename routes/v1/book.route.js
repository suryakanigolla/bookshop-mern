const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const bookController = require("../../controllers/book.controller");
const bookValidation = require("../../validation/book.validation");

const router = express.Router();

router.route("/").get(bookController.getBooks);
router
  .route("/:bookId")
  .get(validate(bookValidation.getBook), bookController.getBook);

module.exports = router;

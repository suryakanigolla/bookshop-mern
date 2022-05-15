const Joi = require("joi");
const { objectId } = require("./custom.validation");

const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

module.exports = {
    getBook
}

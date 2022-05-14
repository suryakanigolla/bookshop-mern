const Joi = require("joi");
const { objectId } = require("./custom.validation");
const { states, cities } = require("../utils/indianStatesAndCities");

const createAddress = {
  body: Joi.object().keys({
    streetAddress: Joi.string().required(),
    landmark: Joi.string().required(),
    state: Joi.string()
      .required()
      .valid(...Object.values(states)),
    city: Joi.string()
      .required()
      .valid(...Object.values(cities)),
    pincode: Joi.string().required(),
    mobile: Joi.string().required(),
  }),
};
const getAddressById = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    addressId: Joi.string().custom(objectId),
  }),
};
const updateAddress = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    addressId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    streetAddress: Joi.string().required(),
    landmark: Joi.string().required(),
    state: Joi.string()
      .required()
      .valid(...Object.values(states)),
    city: Joi.string()
      .required()
      .valid(...Object.values(cities)),
    pincode: Joi.string().required(),
    mobile: Joi.string().required(),
  }),
};
const deleteAddress = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    addressId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAddress,
  getAddressById,
  updateAddress,
  deleteAddress,
};

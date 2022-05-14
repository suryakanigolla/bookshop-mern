const httpStatus = require("http-status");
const Address = require("../models/address.model");
const ApiError = require("../utils/ApiError");

const createAddress = async (addressBody) => {
  return Address.create(addressBody);
};

const getAddressById = async (addressId) => {
  const address = await Address.findById(addressId);
  if (!address) {
    throw new ApiError(httpStatus.NOT_FOUND, "Address not found");
  }
  return address;
};

const updateAddress = async (addressId, updatedBody) => {
  const address = await getAddressById(addressId);
  if (!address) {
    throw new ApiError(httpStatus.NOT_FOUND, "Address not found");
  }
  Object.assign(address, updatedBody);
  await address.save();
  return address;
};

const deleteAddress = async (addressId) => {
  const address = await getAddressById(addressId);
  if (!address) {
    throw new ApiError(httpStatus.NOT_FOUND, "Address not found");
  }
  await address.remove();
  return address;
};

module.exports = {
  createAddress,
  updateAddress,
  getAddressById,
  deleteAddress,
};

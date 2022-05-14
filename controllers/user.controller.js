const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const User = require("../models/user.model");
const Address = require("../models/address.model");
const catchAsync = require("../utils/catchSync");
const userService = require("../services/user.service");
const addressService = require("../services/address.service");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getAddresses = catchAsync(async (req, res) => {
  const addresses = await Address.find({});
  res.send(addresses);
});

const getAddressById = catchAsync(async (req, res) => {
  const address = await addressService.getAddressById(req.params.addressId);
  if (!address) {
    throw new ApiError(httpStatus.NOT_FOUND, "Address not found");
  }
  res.send(address);
});

const createAddress = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  const address = await addressService.createAddress(req.body);
  await userService.addAddress(req.params.userId, address.id);
  res.status(httpStatus.CREATED).send(address);
});

const updateAddress = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  const address = await addressService.updateAddress(
    req.params.addressId,
    req.body
  );
  res.status(httpStatus.CREATED).send(address);
});

const deleteAddress = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  const address = await addressService.deleteAddress(req.params.addressId);
  res.status(httpStatus.CREATED).send(address);
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  getAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
};

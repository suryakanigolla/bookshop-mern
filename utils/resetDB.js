const mongoose = require("mongoose");
const config = require("../config/config");
const Address = require("../models/address.model");
const User = require("../models/user.model");
const Order = require("../models/order.model");
const Token = require("../models/token.model");

const resetDB = async () => {
  await mongoose.connect(config.mongoose.url);
  await Address.deleteMany({});
  await User.deleteMany({});
  await Order.deleteMany({});
  await Token.deleteMany({});
};

resetDB();

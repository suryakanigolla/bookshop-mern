const httpStatus = require("http-status");
const Order = require("../models/order.model");
const Book = require("../models/book.model");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const createOrder = async (orderBody) => {
  if (!(await User.findById(orderBody.customerId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User not found");
  }
  orderBody.bookList.forEach(async (bookId) => {
    if (!(await Book.findById(bookId))) {
      throw new ApiError(httpStatus.BAD_REQUEST, `Book not found ${bookId}`);
    }
  });
  return Order.create(orderBody);
};

const getOrderById = async (id) => {
  return Order.findById(id);
};

const deleteOrder = async (id) => {
  const order = await getOrderById(id);
  if (!order) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Order not found");
  }
  await order.remove();
  return order;
};

module.exports = {
  createOrder,
  getOrderById,
  deleteOrder,
};

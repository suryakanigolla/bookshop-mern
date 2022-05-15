const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchSync");
const bookService = require("../services/book.service");

const getBooks = catchAsync(async (req, res) => {
  const books = await bookService.getBooks();
  res.send(books);
});

const getBook = catchAsync(async (req, res) => {
  const book = await bookService.getBookById(req.params.bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
  }
  res.send(book);
});

module.exports = {
  getBook,
  getBooks,
};

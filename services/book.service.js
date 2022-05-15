const Book = require("../models/book.model");

const getBookById = async (id) => {
  return Book.findById(id);
};

const getBooks = async () => {
  return Book.find({});
};

module.exports = {
    getBooks,
    getBookById
}

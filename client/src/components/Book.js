import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "state/actions/contentActions";
import "./Book.scss";

const Book = ({ title, author, image, price, id }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  const handleAddBook = (book) => {
    dispatch(updateCart(book, "add"));
  };

  return (
    <div className="book">
      <div className="book__image">
        <img src={`data:image/png;base64,${image}`} alt={title} />
      </div>
      <div>
        <div>
          <h3 className="book__title">{title}</h3>
          <h4 className="book__author">{author}</h4>
          <p className="book__price">{`Rs. ${price}`}</p>
        </div>
        {isLoggedIn ? (
          <button
            className="button_unstyled bg-blue-button bg-blue-button-hover book__add"
            onClick={() => handleAddBook({ title, author, image, price, id })}
          >
            Add to Cart
          </button>
        ) : (
          <button className="fs-100 button_unstyled book__login" disabled={true}>
            Login to purchase
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;

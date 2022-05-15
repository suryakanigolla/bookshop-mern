import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateCart, createOrder } from "state/actions/contentActions";

import "./CartPage.scss";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.contentReducer);
  const { isLoggedIn, user } = useSelector((state) => state.userReducer);

  const [price, setPrice] = useState(null);

  const calculatePrice = useCallback(() => {
    let price = 0;
    cart.forEach((item) => {
      price = price + item.price;
    });
    setPrice(price);
  }, [cart]);

  const removeItem = (book) => {
    dispatch(updateCart(book, "remove"));
  };

  const handleCreateOrder = () => {
    const customerId = user.id;
    const bookList = cart.map((item) => item.id);
    dispatch(createOrder({ customerId, bookList }, navigate));
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  return (
    <div className="cart-page">
      {cart.length !== 0 ? (
        <div className="cart-page__content">
          <div className="cart-page__content__cart">
            {cart.map((book, index) => (
              <div key={index} className="cart-page__content__cart__item">
                <div>
                  <div className="cart-page__content__cart__item__image">
                    <img
                      src={`data:image/png;base64,${book.image}`}
                      alt={book.title}
                    />
                  </div>
                  <div>
                    <h3 className="cart-page__content__cart__item__title">
                      {book.title}
                    </h3>
                    <h4 className="cart-page__content__cart__item__author">
                      {book.author}
                    </h4>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="cart-page__content__cart__item__price">{`Rs. ${book.price}`}</p>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px",
                      borderRadius: "8px",
                    }}
                    className="button_unstyled"
                    onClick={() => removeItem(book)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-page__content__two">
            <div className="cart-page__content__summary">
              <p>Total Price {price}</p>
            </div>
            <div className="cart-page__content__actions">
              <button
                className="button_unstyled bg-blue-button bg-blue-button-hover"
                onClick={() => handleCreateOrder()}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p
          style={{
            height: "200px",
            backgroundColor: "white",
            color: "black",
            width: "50vw",
            display: "grid",
            placeContent: "center",
          }}
        >
          Add Items to the cart
        </p>
      )}
    </div>
  );
};

export default CartPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getOrders } from "state/actions/contentActions";

import "./OrdersPage.scss";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orders } = useSelector((state) => state.contentReducer);
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div className="orders-page">
      <div className="orders-page__content">
        {orders.map((order, index) => (
          <div className="orders-page__content__item" key={index}>
            <p>Order ID: {order.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

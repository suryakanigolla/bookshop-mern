import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "state/actions/userActions";
import { CSSTransition } from "react-transition-group";

import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./Dropdown.scss";

const initialState = {
  email: "",
  password: "",
};

const registerInitialState = {
  email: "",
  password: "",
  name: "",
};

const Dropdown = () => {
  const [formBody, setFormBody] = useState(initialState);
  const [registerBody, setRegisterBody] = useState(registerInitialState);
  const [dropdownLevel, setDropdownLevel] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormBody((prev) => ({ ...prev, [`${e.target.name}`]: e.target.value }));
  };

  const handleRegisterChange = (e) => {
    setRegisterBody((prev) => ({
      ...prev,
      [`${e.target.name}`]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formBody));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(registerBody));
  };

  return (
    <div className="dropdown__container">
      <Menu
        menuButton={
          <button className="button_unstyled  bg-button-hover dropdown__button">
            Login
          </button>
        }
        direction="bottom"
        align="end"
        arrow={true}
        transition
      >
        <CSSTransition
          in={dropdownLevel === 0}
          timeout={200}
          classNames="dropdown-level-zero"
          unmountOnExit
        >
          <div className="dropdown dropdown__level__zero">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div>
                <button
                  className="button_unstyled bg-blue-button bg-blue-button-hover"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <p
              style={{
                padding: "0px 10px",
                marginTop: "10px",
                cursor: "pointer",
              }}
              className="text-muted"
              onClick={() => setDropdownLevel(1)}
            >
              Create an account?
            </p>
          </div>
        </CSSTransition>
        <CSSTransition
          in={dropdownLevel === 1}
          timeout={200}
          classNames="dropdown-level-one"
          unmountOnExit
        >
          <div className="dropdown dropdown__level__one">
            <form onSubmit={handleRegister}>
              <div>
                <input
                  name="email"
                  type="email"
                  onChange={handleRegisterChange}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  onChange={handleRegisterChange}
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  name="name"
                  type="text"
                  onChange={handleRegisterChange}
                  placeholder="Name"
                />
              </div>
              <div>
                <button
                  className="button_unstyled bg-blue-button bg-blue-button-hover"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <p
              style={{
                padding: "0px 10px",
                marginTop: "10px",
                cursor: "pointer",
              }}
              className="text-muted"
              onClick={() => setDropdownLevel(0)}
            >
              Back to Login?
            </p>
          </div>
        </CSSTransition>
      </Menu>
    </div>
  );
};

export default Dropdown;

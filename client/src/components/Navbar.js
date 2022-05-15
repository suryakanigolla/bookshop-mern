import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import CartIcon from "assets/icons/cart.svg";
import Dropdown from "./Dropdown";
import ProfileDropdown from "./ProfileDropdown";

import "./Navbar.scss";

const Navbar = () => {
  const navRef = useRef(null);
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  const handleNavScroll = () => {
    const navbar = navRef.current;
    const navPos = navbar.getBoundingClientRect().top;
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
      navbar.classList.add("navbar__sticky");
    } else {
      navbar.classList.remove("navbar__sticky");
    }
  };

  return (
    <div className="navbar" ref={navRef}>
      <div className="bg-main text-navbar navbar__inner">
        <h3 className="fw-700">Book Club</h3>
        <div className="navbar__inner__options">
          <button className="button_unstyled  bg-button-hover navbar__inner__options__cart">
            <img src={CartIcon} alt="Go to cart" />
          </button>
          {isLoggedIn ? <ProfileDropdown /> : <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

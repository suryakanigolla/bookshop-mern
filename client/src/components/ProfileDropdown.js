import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "state/actions/userActions";

import PersonIcon from "assets/icons/person-fill.svg";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./ProfileDropdown.scss";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { refreshToken } = useSelector((state) => state.userReducer);

  const handleLogout = () => {
    dispatch(logout({ refreshToken }));
  };

  return (
    <Menu
      menuButton={
        <button className="button_unstyled bg-button-hover profile-dropdown__profile">
          <img src={PersonIcon} alt="Profile" />
        </button>
      }
      direction="bottom"
      align="end"
      arrow={true}
      transition
    >
      <div className="profile-dropdown">
        <MenuItem onClick={() => navigate("orders")}>My Orders</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </div>
    </Menu>
  );
};

export default ProfileDropdown;

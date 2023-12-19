import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="Header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
          alt=" "
        />
        <div className="Header__Search">
          {/*search Icon*/}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />{" "}
        <HeaderOption Icon={BusinessCenterIcon} title={"Home"} />
        <HeaderOption Icon={ChatIcon} title={"My Network"} />
        <HeaderOption Icon={NotificationIcon} title={"My Network"} />
        <HeaderOption
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ERO4EVHnUraBdQg7Agrq6V_3_Pkl--Bph80QCWyXvg&s"
          title={"Me"}
        />
      </div>
    </div>
  );
}

export default Header;

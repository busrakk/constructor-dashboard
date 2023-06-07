import React from "react";
import {
  MENU_ICON,
  DOT_H_ICON,
  SEARCH_ICON,
  NOTIFICATIONS_ICON,
  MESSAGE_ICON,
  PEOPLE_ICON,
  BAR_CHART_ICON,
  MENU_ICON2,
  PERSON_ICON,
} from "../../../icons/icons";
import "./style.css";

const Header = () => {
  return (
    <div className="header min-w-full">
      <div className="header-left">
        <div className="icons hidden-item">
          <MENU_ICON size={24} />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center icons">
            <MENU_ICON2 size={24} />
          </button>
        </div>
        <span className="logo">Constructor</span>
      </div>
      <div className="menu">
        <a href="/#" className="menu-item">
          Dashboard
        </a>
        <a href="/#" className="menu-item">
          Pages
        </a>
        <a href="/#" className="menu-item">
          Posts
        </a>
        <a href="/#" className="menu-item">
          Files
        </a>
        <a href="/#" className="menu-item">
          Users
        </a>
        <a href="/#" className="menu-item">
          <DOT_H_ICON size={24} className="text-textColor2 -mt-1" />
        </a>
      </div>
      <div className=" relative justify-between hidden-item">
        <input
          type="text"
          className="search-item"
          name="search"
          placeholder="Try searching «New Pages Today»"
        />
        <SEARCH_ICON
          size={24}
          className="absolute right-6 bottom-3 text-textColor2"
        />
      </div>
      <div className="header-right">
        <button type="button" className="button-item">
          <a href="/#">
            <NOTIFICATIONS_ICON size={20} className="text-purple" />
          </a>
          <span className="sr-only">Notifications</span>
          <div className="notification-icon">1</div>
        </button>
        <a href="/#">
          <MESSAGE_ICON size={20} className="icon-item" />
        </a>
        <a href="/#">
          <PEOPLE_ICON size={20} className="icon-item" />
        </a>
        <a href="/#">
          <BAR_CHART_ICON size={20} className="icon-item" />
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center icons">
          <PERSON_ICON size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;

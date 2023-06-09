import React, { useState, useEffect, useRef } from "react";
import { DOT_V_ICON, DOWN_ICON } from "../../../../icons/icons";
import "./style.css";

const Dropdown = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-secondColor mb-6 rounded-xl">
      <div className="header-part">
        <div className="content">
          <div className="mr-2">
            <a href="/#" className="title">
              {props.title}
            </a>
          </div>
          <ul className="tabs">
            <li className="mr-2">
              <a
                href="/#"
                className={`tab-item active active-tab rounded-t-lg ${
                  activeTab === 0 ? "active" : ""
                }`}
                onClick={() => handleTabClick(0)}
              >
                {props.content1}
              </a>
            </li>
            <li className="mr-2">
              <a
                href="/#"
                className={`tab-item ${
                  activeTab ? "active-tab" : ""
                } rounded-t-lg ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                {props.content2}
              </a>
            </li>
            <li className="mr-2">
              <a
                href="/#"
                className={`tab-item ${
                  activeTab ? "active-tab" : ""
                } rounded-t-lg ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(2)}
              >
                {props.content3}
              </a>
            </li>
          </ul>
          <div className="mr-2 flex justify-between">
            <div className="dropdown-part" ref={dropdownRef}>
              <button className="button" onClick={handleToggle}>
                <span className="dropdown-title">
                  {selectedOption ? selectedOption : "Month"}
                </span>
                <DOWN_ICON className="text-textColor2" />
              </button>
              {isOpen && (
                <ul className="dropdown-menus">
                  <li
                    className="dropdown-menu"
                    onClick={() => handleOptionSelect(`${props.content1}`)}
                  >
                    <a
                      href="/#"
                      className={`tab-item ${
                        activeTab ? "active-dropdown" : ""
                      } rounded-t-lg ${activeTab === 0 ? "active" : ""}`}
                      onClick={() => handleTabClick(0)}
                    >
                      {props.content1}
                    </a>
                  </li>
                  <li
                    className="dropdown-menu"
                    onClick={() => handleOptionSelect(`${props.content2}`)}
                  >
                    <a
                      href="/#"
                      className={`tab-item ${
                        activeTab ? "active-dropdown" : ""
                      } rounded-t-lg ${activeTab === 1 ? "active" : ""}`}
                      onClick={() => handleTabClick(1)}
                    >
                      {props.content2}
                    </a>
                  </li>
                  <li
                    className="dropdown-menu"
                    onClick={() => handleOptionSelect(`${props.content3}`)}
                  >
                    <a
                      href="/#"
                      className={`tab-item ${
                        activeTab ? "active-dropdown" : ""
                      } rounded-t-lg ${activeTab === 2 ? "active" : ""}`}
                      onClick={() => handleTabClick(2)}
                    >
                      {props.content3}
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a href="/#" className="icon-dot">
              <DOT_V_ICON size={20} />
            </a>
          </div>
        </div>
        <div className="line"></div>
      </div>

      <div className="mt-3 p-4">
        {activeTab === 0 && <>{props.active1}</>}
        {activeTab === 1 && <>{props.active2}</>}
        {activeTab === 2 && <>{props.active3}</>}
      </div>
    </div>
  );
};

export default Dropdown;

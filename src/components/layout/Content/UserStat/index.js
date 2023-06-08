import React, { useState } from "react";
import { DOT_V_ICON, DOWN_ICON } from "../../../../icons/icons";
import { BarChart } from "./BarChart";
import "./style.css";

const UserStat = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-secondColor my-10 rounded-xl">
      <div className="header-part">
        <div className="content">
          <div className="mr-2">
            <a href="/#" className="title">
              User Stat
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
                Month
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
                6 Month
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
                Year
              </a>
            </li>
          </ul>
          <div className="mr-2 flex justify-between">
            <div className="dropdown-part">
              <button className="button" onClick={handleToggle}>
                <span className="dropdown-title">Month</span>
                <DOWN_ICON className="text-textColor2" />
              </button>
              {isOpen && (
                <ul className="dropdown-menus">
                  <li className="dropdown-menu">
                    <a
                      href="/#"
                      className={`tab-item ${
                        activeTab ? "active-dropdown" : ""
                      } rounded-t-lg ${activeTab === 0 ? "active" : ""}`}
                      onClick={() => handleTabClick(0)}
                    >
                      Month
                    </a>
                  </li>
                  <li className="dropdown-menu">
                    <a
                      href="/#"
                      className={`tab-item ${
                        activeTab ? "active-dropdown" : ""
                      } rounded-t-lg ${activeTab === 1 ? "active" : ""}`}
                      onClick={() => handleTabClick(1)}
                    >
                      6 Month
                    </a>
                  </li>
                  <li className="dropdown-menu">
                    <a
                      href="/#"
                      className={`tab-item ${
                        activeTab ? "active-dropdown" : ""
                      } rounded-t-lg ${activeTab === 2 ? "active" : ""}`}
                      onClick={() => handleTabClick(2)}
                    >
                      Year
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
        {activeTab === 0 && <BarChart />}
        {activeTab === 1 && <p className="text-xs">Tab 2 Content</p>}
        {activeTab === 2 && <p className="text-xs">Tab 3 Content</p>}
      </div>
    </div>
  );
};

export default UserStat;

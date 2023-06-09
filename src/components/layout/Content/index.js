import React from "react";
import Card from "./Card/Card";
import SiteSpeed from "./SiteSpeed";
import Dropdown from "./common/Dropdown";
import HBarChart from "./Charts/HBarChart";
import VBarChart from "./Charts/VBarChart";

const Content = () => {
  return (
    <div className="container col-span-3">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="row-span-2">
          <Card />
          <Dropdown
            title="User Stat"
            content1="Month"
            content2="6 Month"
            content3="Year"
            active1={<VBarChart />}
            active2="Tab 2 Content"
            active3="Tab 3 Content"
          />
        </div>
        <div className="row-span-2">2. kısım</div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="row-span-2">
          <Dropdown
            title="Statistics"
            content1="Now"
            content2="Today"
            content3="Month"
            active1={<HBarChart />}
            active2="Tab 2 Content"
            active3="Tab 3 Content"
          />
        </div>
        <div className="row-span-1">
          <Dropdown
            title="Site Speed"
            content1="Now"
            content2="Today"
            content3="Month"
            active1={<SiteSpeed />}
            active2="Tab 2 Content"
            active3="Tab 3 Content"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

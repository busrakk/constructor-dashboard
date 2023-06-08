import React from "react";
import Card from "./Card/Card";
import UserStat from "./UserStat";
import Statistic from "./Statistic";
import SiteSpeed from "./SiteSpeed";

const Content = () => {
  return (
    <div className="container col-span-3">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="row-span-2">
          <Card />
          <UserStat />
        </div>
        <div className="row-span-2">2. kısım</div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="row-span-2">
          <Statistic />
        </div>
        <div className="row-span-1">
          <SiteSpeed />
        </div>
      </div>
    </div>
  );
};

export default Content;

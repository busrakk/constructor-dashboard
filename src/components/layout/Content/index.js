import React from "react";
import Card from "./Card/Card";
import UserStat from "./UserStat";

const Content = () => {
  return (
    <div className="container col-span-3">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="row-span-2">
          <Card />
          <UserStat />
        </div>
        <div className="row-span-2">2. kısım</div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="row-span-2">
          <div>1.kısım</div>
        </div>
        <div className="row-span-1">2. kısım</div>
      </div>
    </div>
  );
};

export default Content;

import React from "react";
import Dropdown from "../common/Dropdown";
import { BarChart } from "./BarChart";

const Statistic = () => {
  return (
    <Dropdown
      title="Statistics"
      content1="Now"
      content2="Today"
      content3="Month"
      active1={<BarChart />}
      active2="Tab 2 Content"
      active3="Tab 3 Content"
    />
  );
};

export default Statistic;

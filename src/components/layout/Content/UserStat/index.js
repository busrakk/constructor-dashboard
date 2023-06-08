
import { BarChart } from "./BarChart";
import Dropdown from "../common/Dropdown";

const UserStat = () => {
  return (
    <Dropdown
      title="User Stat"
      content1="Month"
      content2="6 Month"
      content3="Year"
      active1= {<BarChart />}
      active2="Tab 2 Content"
      active3="Tab 3 Content"
    />
  );
};

export default UserStat;

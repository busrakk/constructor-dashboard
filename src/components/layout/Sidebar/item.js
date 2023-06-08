import React from "react";
import { DOWN_ICON, UP_ICON } from "../../../icons/icons";
import "./style.css";
import UserItem from "./UserItem";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
import img5 from "../../../assets/images/img5.jpg";
import img6 from "../../../assets/images/img6.jpg";
import img7 from "../../../assets/images/img7.jpg";
import img8 from "../../../assets/images/img8.jpg";

const Item = (props) => {
  let content;
  if (props.count === 0) {
    content = "";
  } else if (props.count) {
    content = <span className="count-item">{props.count}</span>;
  } else {
    content = <span className="badge-item">NEW</span>;
  }

  return (
    <div
      className={
        props.isOpen ? "bg-secondColor mx-2 rounded-2xl shadow-md" : ""
      }
    >
      <li className="nav-item group" onClick={props.handleToggle}>
        <div className="flex justify-between items-center space-x-4">
          {props.icon}
          <div className="text-xs font-bold leading-3">{props.title}</div>
        </div>
        <div className="flex justify-between items-center space-x-4">
          {content}
          {props.isOpen ? (
            <UP_ICON size={18} className="text-textColor2" />
          ) : (
            <DOWN_ICON size={18} className="text-textColor2" />
          )}
        </div>
      </li>

      {props.isOpen && (
        <ul className="border-t-2 pb-2 border-[#F5F6F7]">
          <UserItem img={img1} name="Bess Atkins" action="Active" />
          <UserItem img={img2} name="Brett Foster" action="Offline" />
          <UserItem img={img3} name="Leona Todd" action="Offline" />
          <UserItem img={img4} name="Ann Ortiz" action="Active" />
          <UserItem img={img5} name="Nicholas Black" action="Active" />
          <UserItem img={img6} name="Ollie Harmon" action="Wait" />
          <UserItem img={img7} name="Vincent Reese" action="Wait" />
          <UserItem img={img8} name="Ida Robertson" action="Active" />
        </ul>
      )}
    </div>
  );
};

export default Item;

import React from "react";
import "./style.css";

const UserItem = (props) => {
  let content;
  if (props.action === "Active") {
    content = <div className="user-action bg-transparent border-green"></div>;
  } else if (props.action === "Offline") {
    content = (
      <div className="user-action bg-transparent border-textColor2"></div>
    );
  } else if (props.action === "Wait") {
    content = <div className="user-action bg-transparent border-yellow"></div>;
  }

  return (
    <li className="user-item">
      <div className="flex justify-between items-center space-x-4">
        <img src={props.img} alt="" className="w-[30px] h-[30px] rounded-md" />
        <div className="text-xs font-bold leading-3">{props.name}</div>
      </div>
      <div className="flex justify-start items-center space-x-4">
        {content}
        <span className="text-[10px] font-bold">{props.action}</span>
      </div>
    </li>
  );
};

export default UserItem;

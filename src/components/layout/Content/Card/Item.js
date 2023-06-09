import React from "react";
import { DOT_H_ICON, PLUS_ICON } from "../../../../icons/icons";
import classNames from "classnames";
import "./style.css";

const Item = (props) => {
  let combined = classNames(
    "max-w-sm px-4 py-3 rounded-lg w-[144px] h-[144px]",
    props.color
  );

  let iconCombined = classNames("rounded-full", props.iconColor);
  return (
    <div className={combined}>
      <div className="card">
        <span className="text-xs leading-5 font-bold">
          {props.title}
        </span>
        <span className="icon">
          <DOT_H_ICON size={20} />
        </span>
      </div>

      <div>
        <p className="number">
          {props.number}
        </p>
      </div>

      <div>
        <div className="bottom-part">
          <button className="bottom-left">
            <PLUS_ICON className={iconCombined} size={14} />
          </button>

          <button className="bottom-right">
            <span className="bottom-title">
              View All
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

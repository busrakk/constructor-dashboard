import React from "react";
import { DOT_H_ICON, PLUS_ICON } from "../../../../icons/icons";
import classNames from "classnames";

const Item = (props) => {
  let combined = classNames(
    "max-w-sm px-4 py-3 rounded-lg w-[150px] h-[150px]",
    props.color
  );

  let iconCombined = classNames("rounded-full", props.iconColor);
  return (
    <div className={combined}>
      <div className="flex items-center justify-between">
        <span className="text-xs leading-5 font-bold text-gray-800">
          {props.title}
        </span>
        <span className="p-1 text-xs text-secondColor/60 uppercase bg-blue-200 rounded-full">
          <DOT_H_ICON size={20} />
        </span>
      </div>

      <div>
        <p className="flex justify-center items-center mt-2 text-[22px] font-bold leading-[30px]  text-gray-600">
          {props.number}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-center mt-4">
          <button className="flex items-center mr-2 text-gray-800 cursor-pointer w-[30px] h-[30px] px-2 py-2  text-base rounded-full text-secondColor  bg-textColor1/20">
            <PLUS_ICON className={iconCombined} size={14} />
          </button>

          <button className="mr-2 text-gray-800 cursor-pointer">
            <span className="px-2 py-2 leading-5 text-[10px] rounded-full text-white font-bold bg-textColor1/20">
              View All
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

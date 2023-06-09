import React from "react";

const Item = (props) => {
  return (
    <div className="w-[100px] h-[80px] bg-blue/10 rounded-[10px]">
      <div className="m-4">
        <div className="flex items-center justify-center text-blue font-bold text-sm leading-[30px]">
          {props.number}
        </div>
        <span className="flex items-center justify-center text-blue font-bold text-[10px] leading-5">
          {props.title}
        </span>
      </div>
    </div>
  );
};

export default Item;

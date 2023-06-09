import React from "react";

const Item = (props) => {
  const { badges } = props;
  return (
    <li className="border-l-2 border-textColor2/20 ml-2">
      <div className="flex mb-3">
        <div
          className={`text-${props.color} bg-textColor2/20 lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] flex items-center justify-center rounded-full lg:-ml-7 -ml-5`}
        >
          {props.icon}
        </div>
        <div className="block pl-6 pb-3.5 lg:w-80 w-64 ml-2">
          <div className="flex justify-between space-x-4 mb-3">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="p-2 lg:text-[10px] text-[8px] leading-5 rounded-full text-textColor3 font-black bg-background"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="">
            <p className="text-textColor1 font-bold lg:text-xs text-[10px] leading-5 mb-1">
              {props.title}
            </p>
            <p className="text-textColor3 font-bold lg:text-xs text-[10px] leading-5">
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;

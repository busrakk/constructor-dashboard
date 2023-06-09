import React from "react";
import ProgressBar from "./ProgressBar";
import Item from "./Item";

const SiteSpeed = () => {
  return (
    <>
      <div className="flex justify-center items-center m-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex lg:justify-start justify-center items-center">
            <div className="w-[170px] h-[170px]">
              <ProgressBar />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4 mt-4 lg:mt-0">
              <Item number="75" title="Grade" />
              <Item number="1.9 mb" title="Page Size" />
              <Item number="631 mc" title="Load Time" />
              <Item number="42" title="Requests" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteSpeed;

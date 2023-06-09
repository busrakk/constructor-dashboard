import React from "react";

// Import react-circular-progressbar module and styles
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const progress = 631 / 1000;
  return (
    <CircularProgressbarWithChildren
      value={progress * 100} // İlerleme yüzdesini 0-100 aralığında olacak şekilde ayarla
      styles={{
        path: {
          stroke: "rgba(51, 97, 255, 1)", // İlerleme çizgisi rengini ayarla
          strokeWidth: 2, // İlerleme çizgisi kalınlığını ayarla
        },
        trail: {
          stroke: "rgba(51, 97, 255, 0.5)", // Geri kalan kısmın rengini ayarla
          strokeWidth: 2, // Geri kalan kısmın kalınlığını ayarla
          fill: "rgba(51, 97, 255, 0.5)", // Dairenin içini renklendir
        },
      }}
    >
      <div>
        <div className="text-blue text-[24px] font-bold leading-[30px]">
          631
        </div>
        <span className="flex items-center justify-center text-blue text-xs font-bold leading-5">
          mc
        </span>
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default ProgressBar;

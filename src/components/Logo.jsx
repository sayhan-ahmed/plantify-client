import React from "react";
import { GiPlantRoots } from "react-icons/gi";

const Logo = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center gap-2 text-[32px] font-bold text-[#1A1A1A] ${className}`}
    >
      <GiPlantRoots
        className="text-green-600 text-[34px]"
        strokeWidth={16}
      />
      <span className="text-green-600">Plantify</span>
    </div>
  );
};

export default Logo;

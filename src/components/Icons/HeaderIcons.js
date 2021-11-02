import React from "react";

const HeaderIcons = ({ Icon, name }) => {
  return (
    <div className="w-full place-items-center grid grid-rows-2 md:gap-2 md:grid-cols-2">
      <Icon className="w-8 h-8 text-gray-300 md:justify-self-end md:w-10 md:h-10 " />
      <h3 className="text-gray-300 md:justify-self-start text-sm">{name}</h3>
    </div>
  );
};

export default HeaderIcons;

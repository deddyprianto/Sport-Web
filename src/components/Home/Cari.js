import React from "react";
import Countries from "./Countries";
import Data from "./Data";

const Cari = ({ IconCari, IconChat, IconBell, name = "Cari di sini " }) => {
  return (
    <div className="w-full flex justify-center">
      <Data />
      <Countries />
      {/* <div className="input w-11/12 h-10 rounded-md flex justify-evenly items-center bg-gray-100">
        <IconCari className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder={name}
          className="bg-transparent w-9/12 outline-none"
        />
        <IconChat className="h-5 w-5 text-gray-400" />
        <IconBell className="h-5 w-5 text-gray-400" />
      </div> */}
    </div>
  );
};

export default Cari;

import React from "react";
import UCL from "../../img/UCL.png";
import {
  HomeIcon,
  LocationMarkerIcon,
  TrendingUpIcon,
  UserIcon,
  ClipboardListIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import HeaderIcons from "../Icons/HeaderIcons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-red-400 h-screen w-20 justify-center items-center md:w-40">
      <div className="w-full flex justify-center items-center">
        <img src={UCL} alt="" className="w-32 h-30" />
      </div>
      {/* icon */}
      <div className="flex flex-col justify-center items-center pb-6 md:pb-2 mt-10">
        <Link to="/">
          <HeaderIcons Icon={HomeIcon} name="Home" />
        </Link>
        <Link to="/location">
          <HeaderIcons Icon={LocationMarkerIcon} name="Location" />
        </Link>
        <Link>
          <HeaderIcons Icon={TrendingUpIcon} name="Predictions" />
        </Link>
        <HeaderIcons Icon={UserIcon} name="Coach" />
        <HeaderIcons Icon={ClipboardListIcon} name="Schedule" />
        <HeaderIcons Icon={UserGroupIcon} name="Liga" />
      </div>
    </div>
  );
};

export default Navbar;

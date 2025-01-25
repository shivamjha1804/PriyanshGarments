import React from "react";
import facebookIcon from "../../assets/UpperNav/Facebook F.png";
import instagramIcon from "../../assets/UpperNav/Instagram.png";
import youtubeIcon from "../../assets/UpperNav/YouTube Logo.png";
const UpperNav = () => {
  return (
    <nav className="flex justify-end gap-2 border-y-2 pr-20">
      <img
        className="w-5 h-5 my-2 cursor-pointer"
        src={facebookIcon}
        alt="facebook"
      />
      <img
        className="w-5 h-5 my-2 cursor-pointer"
        src={instagramIcon}
        alt="instagram"
      />
      <img
        className="w-5 h-5 my-2 cursor-pointer"
        src={youtubeIcon}
        alt="youtube"
      />
    </nav>
  );
};

export default UpperNav;

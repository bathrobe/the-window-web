import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { RiArticleFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IconContext } from "react-icons";
import { GiWindow } from "react-icons/gi";
export default function Icon({ type, style, size }) {
  let icon;
  switch (type) {
    case "calendar":
      icon = <BsFillCalendarEventFill />;
      break;
    case "globe":
      icon = <GoGlobe />;
      break;
    case "article":
      icon = <RiArticleFill />;
      break;
    case "search":
      icon = <BsSearch />;
      break;
    case "menu":
      icon = <HiOutlineMenuAlt3 />;
      break;
    case "window":
      icon = <GiWindow />;
      break;
  }

  return (
    <IconContext.Provider value={{ size: size, className: style }}>
      {icon}
    </IconContext.Provider>
  );
}

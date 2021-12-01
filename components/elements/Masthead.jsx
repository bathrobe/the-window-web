import React from "react";
import Icon from "../atoms/Icon";
import Toggle from "../atoms/Toggle";
export default function Masthead() {
  return (
    <div className="grid grid-cols-3 my-8 max-w-container mx-auto">
      <div className="flex flex-col justify-between">
        <div className="flex">
          <Icon style="text-gray-200" size="1.5em" type="search" />
          <Icon style="text-gray-200" size="1.5em" type="menu" />
        </div>
        <p className="text-gray-200">Today's date</p>
      </div>

      <div className="justify-self-center">
        <Icon style="text-gray-200" size="6em" type="window" />
        {/* <img src="/window.png" alt="logo" className="max-h-md" /> */}
        {/* <h1 className="text-2xl text-gray-300 font-bold">The Window</h1> */}
      </div>
      <div className="justify-self-end">
        <div className="flex">
          <Toggle />
        </div>
      </div>
    </div>
  );
}

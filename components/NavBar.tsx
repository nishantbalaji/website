import React from "react";
import DarkSwitch from "./darkSwitch";
import Link from "next/link";

const NavBar: React.FC<object> = () => {
  return (
    <nav className="text-lg p-8 font-general flex flex-row align-evenly ">
      {/* <div className="place-content-stretch text-middle basis-1/2 bg-orange-200">
        nishant balaji
      </div>

      <div className="place-content-stretch text-right basis-1/2 space-x-2 bg-purple-200">
        <DarkSwitch />
        <Link
          className="inline-block text-sm focus:outline-none focus:ring focus:ring-offset-2 sm:text-base hover:underline hover:underline-offset-2 hover:text-black focus:ring-opacity-50"
          href="#"
        >
          playground
        </Link>
        <Link
          className="inline-block text-sm focus:outline-none focus:ring focus:ring-offset-2 sm:text-base hover:underline hover:underline-offset-2 hover:text-black focus:ring-opacity-50"
          href="#"
        >
          Resume2
        </Link>
      </div> */}
    </nav>
  );
};

export default NavBar;

import React from "react";
import DarkSwitch from "./darkSwitch";

const NavBar: React.FC<object> = () => {
  return (
    <nav className="text-lg py-4 px-8 font-general justify-center flex flex-row align-evenly ">
      <div className="text-middle basis-1/2">nishant balaji</div>
      <div className="text-right basis-1/2 space-x-2 ">
        <DarkSwitch />
      </div>
    </nav>
  );
};

export default NavBar;

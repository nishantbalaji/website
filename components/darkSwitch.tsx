import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

const DarkSwitch: React.FC<object> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="w-6 h-6 md:h-8 md:w-8"
      />
    </button>
  );
};

export default DarkSwitch;

import React from "react";
import Icons from "./Icons";

const Description: React.FC<object> = () => {
  return (
    <div className="mt-4 text-left text-gray-700 text-md md:text-xl max-w-prose dark:text-gray-400 ">
      <p>
        i&apos;m currently a first year masters year student at
        <a
          href="https://ucsd.edu"
          className="p-1 decoration-ucsd-gold hover:text-ucsd-blue underline-offset-2 hover:underline"
        >
          uc san diego 🔱
        </a>
        studying computer engineering. i&apos;m passionate about technology and
        i love learning more and exploring the field!
      </p>
      <br />
      <p>
        right now, i&apos;m working at
        <a
          href="https://protolab.ucsd.edu/"
          className="p-1 text-black dark:text-white dark:decoration-white decoration-black underline-offset-2 hover:underline"
        >
          protolab,
        </a>
        and
        <a
          href="https://e4e.ucsd.edu/"
          className="p-1 text-black dark:text-white dark:decoration-white decoration-black underline-offset-2 hover:underline"
        >
          engineers for exploration.
        </a>
        i&apos;ve previously interned at
        <a
          href="https://www.roblox.com"
          className="p-1 text-black dark:text-white dark:decoration-white decoration-black underline-offset-2 hover:underline"
        >
          roblox,
        </a>
        <a
          href="https://www.nvidia.com"
          className="p-1 text-nvidia decoration-nvidia underline-offset-2 hover:underline"
        >
          nvidia,
        </a>
        and
        <a
          href="https://www.nasa.gov/goddard"
          className="p-1 text-nasa decoration-nasa underline-offset-2 hover:underline"
        >
          nasa goddard space flight center.
        </a>
        at ucsd, i was the previous president of the
        <a
          href="https://acmucsd.com"
          className="p-1 text-acm decoration-acm underline-offset-2 hover:underline"
        >
          association for computing machinery.
        </a>{" "}
      </p>
      <br />
      <p>feel free to connect with me at any of the links below!</p>
      <Icons />
    </div>
  );
};

export default Description;

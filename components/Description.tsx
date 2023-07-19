import React from "react";

const Description: React.FC<object> = () => {
  return (
    <div className="mt-8 text-left text-gray-700 md:mt-20 text-md md:text-xl max-w-prose dark:text-gray-400 ">
      <p>
        i&apos;m currently a third year student at
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
        right now, i&apos;m interning at
        <a
          href="https://www.roblox.com"
          className="p-1 text-black dark:text-white dark:decoration-white decoration-black underline-offset-2 hover:underline"
        >
          roblox.
        </a>
        i&apos;ve previously interned at
        <a
          href="https://www.nvidia.com"
          className="p-1 text-nvidia decoration-nvidia underline-offset-2 hover:underline"
        >
          nvidia
        </a>
        and
        <a
          href="https://www.nasa.gov/goddard"
          className="p-1 text-nasa decoration-nasa underline-offset-2 hover:underline"
        >
          nasa goddard space flight center.
        </a>
        at ucsd, i&apos;m currently the president of the
        <a
          href="https://acmucsd.com"
          className="p-1 text-acm decoration-acm underline-offset-2 hover:underline"
        >
          association for computing machinery.
        </a>{" "}
      </p>
      <br />
      <p>feel free to connect with me at any of the links below!</p>
    </div>
  );
};

export default Description;

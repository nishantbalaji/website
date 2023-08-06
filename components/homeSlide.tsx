import Description from "./Description";
import Intro from "./Intro";

const HomeSlide = () => {
  return (
    <div className="flex items-center flex-col font-general justify-center w-screen px-8 transition-colors duration-300 dark:text-white dark:bg-background">
      <Intro />
      <Description />
    </div>
  );
};

export default HomeSlide;

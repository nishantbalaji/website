import { NextComponentType } from "next";
import styles from "./Loader.module.css";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Loader: NextComponentType = () => {
  return (
    <div className="loader">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};

export default Loader;

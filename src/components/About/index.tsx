import { NextComponentType } from "next";
import styles from "./styles.module.scss";
import ReactTypingEffect from "react-typing-effect";
import Name from "public/Name";
import { motion, stagger } from "framer-motion";

const About: NextComponentType = () => {
  const titles = [
    "developer",
    "engineer",
    "programmer",
    "coder",
    "full stack engineer",
    "student",
    "computer engineer",
  ];

  return (
    <motion.div
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.42, 0, 0.58, 1],
        staggerChildren: 0.5,
      }}
    >
      <motion.h2 className={styles.heading_two}>hello, world! 👋</motion.h2>
      <motion.h1 className={styles.heading_one}>
        i&#39;m&nbsp;
        <span className={styles.name}>nishant balaji</span>
      </motion.h1>
      <motion.div className={styles.typing}>
        <ReactTypingEffect
          text={titles}
          speed={100}
          eraseDelay={1000}
          className="text-2xl"
        />
      </motion.div>
      {/* <div className={styles.description}>
        i'm currently a third year student at uc san diego studying computer
        engineering. i'm passionate about technology and i love learning more
        and exploring the field! right now, i'm interning at roblox. i've
        previously interned at nvidia and nasa goddard space flight center.at
        ucsd, i'm currently the president of the association for computing
        machinery. feel free to connect with me at any of the links below!
      </div> */}
    </motion.div>
  );
};

export default About;

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
    </motion.div>
  );
};

export default About;

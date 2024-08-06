import { NextComponentType } from "next";
import styles from "./styles.module.scss";
import ReactTypingEffect from "react-typing-effect";

const About: NextComponentType = () => {
  const titles = [
    "developer",
    "engineer",
    "programmer",
    "coder",
    "full stack engineer",
    "student",
    "computer engineer",
    "photographer",
  ];

  return (
    <div className={styles.about}>
      <h2 className={styles.heading_two}>hello, world! 👋</h2>
      <h1 className={styles.heading_one}>
        i&#39;m&nbsp;
        <span className={styles.name}>nishant balaji</span>
      </h1>
      <div className={styles.typing}>
        <ReactTypingEffect
          text={titles}
          speed={100}
          eraseDelay={1000}
          className="text-2xl"
        />
      </div>
      <div className={styles.description}>
        i'm currently a masters student at uc san diego studying computer
        engineering. i'm passionate about technology and i love learning more
        and exploring the field! i've previously interned at roblox, nvidia and
        nasa goddard space flight center. at ucsd, i was the previous president
        of the association for computing machinery, where i founded our outreach
        program, created out hackathon, and ran out annual{" "}
        <span>career fair</span>. feel free to connect with me at any of the
        links below!
      </div>
    </div>
  );
};

export default About;

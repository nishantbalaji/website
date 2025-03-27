import { NextPage } from "next";
import styles from "./page.module.scss";

const About: NextPage = () => {
  return (
    <main className={styles.main}>
      {/* <p>🚧 This page is still under construction. Check back later! 🚧</p> */}
      <h1 className={styles.heading}>who am i? </h1>
      <div className={styles.description}>
        <p>
          i&apos;m currently a masters student at <span>uc san diego</span>{" "}
          studying computer engineering.
        </p>
        <br />
        <p>
          {/* i've previously interned at <span>roblox</span>, <span>nvidia</span>{" "}
          and <span>nasa goddard space flight center</span>. */}
          i&apos;m super interested in learning more about tech and computing,
          as well as cs education to underrepresented communities! at ucsd, i
          was the previous president of the{" "}
          <a href="https://acmucsd.com" className={styles.acm}>
            association for computing machinery
          </a>
          , where i founded our{" "}
          <a href="https://outreach.acmucsd.com" className={styles.outreach}>
            outreach
          </a>{" "}
          program, created our{" "}
          <a
            href="https://diamondhacks.acmucsd.com"
            className={styles.hackathon}
          >
            hackathon
          </a>
          , and ran our annual <span className={styles.space}>career fair</span>
          .
        </p>
        <br />
        <p>
          outside of work, i love photography, hanging out with friends,
          exploring new food, hiking, and playing games!
        </p>
        <br />
        {/* <p>feel free to connect with me at any of the links below!</p> */}
      </div>
    </main>
  );
};

export default About;

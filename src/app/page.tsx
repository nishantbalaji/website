"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { NextPage } from "next";
import Loader from "@/components/Loader";
import ImageComponent from "@/components/ImageComponent";
import { NextComponentType } from "next";
import ReactTypingEffect from "react-typing-effect";

const titles = [
  "nishant balaji.",
  "a developer.",
  "an engineer.",
  "a programmer.",
  "a coder.",
  "a full stack engineer.",
  "a student.",
  "a computer engineer.",
  "a photographer.",
];

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>"
      />
      <div className={styles.about}>
        <h2 className={styles.heading_two}>hello, world! 👋</h2>
        <h1 className={styles.heading_one}>
          i&#39;m&nbsp;
          {/* <span className={styles.name}>nishant balaji</span> */}
          {/* <br /> */}
          <ReactTypingEffect
            text={titles}
            speed={250}
            eraseDelay={2000}
            className={styles.typing}
          />
        </h1>
      </div>
      {/* <ImageComponent path={"/birds.JPG"} /> */}
    </main>
  );
};

export default Home;

"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { NextPage } from "next";
import Loader from "@/components/Loader";
import ImageComponent from "@/components/ImageComponent";
import { NextComponentType } from "next";
import ReactTypingEffect from "react-typing-effect";

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

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>"
      />
      <div className={styles.about}>
        <h1 className={styles.heading_one}>
          hello, world! 👋 i&#39;m&nbsp;
          <span className={styles.name}>nishant balaji</span>
        </h1>

        <ReactTypingEffect
          text={titles}
          speed={100}
          eraseDelay={1000}
          className={styles.typing}
        />
      </div>
      {/* <ImageComponent path={"/birds.JPG"} /> */}
    </main>
  );
};

export default Home;

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { NextPage } from "next";
import Loader from "@/components/Loader";
import About from "@/components/About";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>"
      />
      <About />
    </main>
  );
};

export default Home;

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { NextPage } from "next";
import Loader from "@/components/Loader";
import About from "@/components/About";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <About />
    </main>
  );
};

export default Home;

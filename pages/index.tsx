import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import HomeSlide from "../components/homeSlide";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>nishant balaji</title>
      </Head>
      <NavBar />
      <HomeSlide />
      <Footer />
    </div>
  );
};

export default Home;

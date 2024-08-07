import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import FlareCursor from "@/components/Cursor"; // Don't forget to update this path to your own component file.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant Balaji",
  description: "Nishant Balaji",
};

// import '../src/styles/globals.css' // Make sure to change this path to your own css file path.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <FlareCursor /> */}
        <main>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </main>
      </body>
    </html>
  );
}

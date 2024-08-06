import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant Balaji",
  description: "Nishant Balaji",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

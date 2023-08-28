"use client";
import { NextComponentType } from "next";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import { usePathname } from "next/navigation";

const NavBar: NextComponentType = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "experience",
      href: "/experience",
    },
    {
      name: "resume",
      href: "/resume.pdf",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_left}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src="/name.svg" width="112" height="20" alt="logo" />
            </div>
          </Link>
        </div>
        <div className={styles.navbar_right}>
          <div className={styles.navbar_items}>
            {navLinks.map((link) => {
              let isActive = false;
              if (link.href === "/") {
                isActive = pathname === link.href;
              } else {
                isActive = pathname.startsWith(link.href);
              }

              return (
                <Link
                  className={isActive ? styles.active : styles.navbar_item}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
            {/* <Link
              className={
                styles.navbar_item && activeSegment === targetSegment
                  ? "underline"
                  : "none"
              }
              href="/"
            >
              <div className={router.route == "/" ? "active" : ""}>Home</div>
            </Link>
            <Link className={styles.navbar_item} href="#">
              <div className={router.route == "/" ? "active" : ""}>Home</div>
            </Link>
            <Link className={styles.navbar_item} href="#">
              <div className={router.route == "/" ? "active" : ""}>Home</div>
            </Link>
            <Link className={styles.navbar_item} href="/resume.pdf">
              Resume
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

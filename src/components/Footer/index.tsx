import { NextComponentType } from "next";
import styles from "./styles.module.scss";
import Link from "next/link";

const Footer: NextComponentType = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <Link href="mailto:nishantb1130@gmail.com">email</Link>
        <Link href="https://github.com/nishantbalaji">github</Link>
        <Link href="https://linkedin.com/in/nishantbalaji">linkedin</Link>
      </div>
      <span className={styles.footer_note}>made with 🍵 by nishant balaji</span>
      <div className={styles.right}></div>
    </div>
  );
};

export default Footer;

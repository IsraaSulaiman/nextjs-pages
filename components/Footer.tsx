import { NonRegisteredFooterLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import styles from "./layout.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>logo</div>
      <nav>
        <ul className={styles.nonList}>
          {NonRegisteredFooterLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.url}> {link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

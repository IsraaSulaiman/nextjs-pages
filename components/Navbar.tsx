import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./layout.module.scss";
import Link from "next/link";
import { UserContext } from "@/lib/context";

import {
  navLinksForNonRegistered,
  navLinksForRegistered,
} from "@/constants/footerlinks";
import { cookieManager } from "@/lib/auth";
import { useRouter } from "next/router";

function Navbar() {
  const context: any = useContext(UserContext);
  const router = useRouter();
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    if (loggedOut) {
      cookieManager.delete("TK");
      router.push("/login");
    }
  }, [context.user]);

  const navLinks = context.user
    ? navLinksForRegistered
    : navLinksForNonRegistered;

  const logout = useCallback(() => {
    console.log("logout");
    context.setUser(null);
    setLoggedOut(true);
  }, []);

  const handleNavigation = (link: {
    text: string;
    isLogout?: boolean;
    link?: string;
  }) => {
    if (link.isLogout) {
      logout();
    }
  };

  return (
    <header className={styles.header}>
      {context.user ? (
        <Link href='/profile'>My prrofile ({context?.user?.name})</Link>
      ) : (
        <Link href='/'>Logo</Link>
      )}
      <nav>
        {navLinks.map((link: any) =>
          link.isLogout ? (
            <button key={link.text} onClick={() => handleNavigation(link)}>
              {link.name}
              {link.text}
            </button>
          ) : (
            <Link
              key={link.text}
              href={link.link ? link?.link : ""}
              onClick={() => handleNavigation(link)}
            >
              {link.text}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}

export default Navbar;

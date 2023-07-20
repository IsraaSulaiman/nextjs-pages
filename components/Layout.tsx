import React, { ComponentElement, ReactNode } from "react";
import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import style from "./layout.module.scss";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={style.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;

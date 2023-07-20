import React from "react";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <section>
      <section className={styles.banner}>
        <h2>FAKEEEEE Products</h2>
        <h3>
          Welcome to our products show... You can easly find your product here
          and buy it in a second
        </h3>
        <button className='tt-btn primary'>Go to our gallary</button>
      </section>
    </section>
  );
}

export default Hero;

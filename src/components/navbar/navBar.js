import Styled from "styled-components";
import Link from "next/link";
import styles from "./styles/NavBar.module.css";

const navBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarLogo}>
          <h1>E-Shop</h1>
        </div>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__listItem}>
            <Link href="/">home</Link>
          </li>
          <li className={styles.navbar__listItem}>
            <Link href="/products">products</Link>
          </li>
          <li className={styles.navbar__listItem}>
            <Link href="/service">service</Link>
          </li>
          <li className={styles.navbar__listItem}>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;

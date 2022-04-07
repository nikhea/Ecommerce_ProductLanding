import Styled from "styled-components";
import Link from "next/link";
import styles from "./styles/NavBar.module.css";
import { BiSearch } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
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
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__listItem}>
            <Link href="/">
              <BiSearch />
            </Link>
          </li>
          <li className={styles.navbar__listItem}>
            <Link href="/">
              <BsCart2 />
            </Link>
          </li>
          <li className={styles.navbar__listItem}>
            <Link href="/">
              <MdPersonOutline />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;

/* eslint-disable @next/next/link-passhref */
import { useState } from "react";
import Link from "next/link";
import styles from "./styles/NavBar.module.css";
import { BiSearch } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";
import MenuStyle from "./MenuStyle";
import BrandLogo from "./BrandLogo";
const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
   console.log(showNav)
  const navItem = (
    <div className={styles.container}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <a>
            <span>E</span>-Shop
          </a>
        </Link>
      </div>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__listItem}>
          <Link href="/">home</Link>
        </li>
        <li className={styles.navbar__listItem}>
          <Link href="/products">products</Link>
        </li>
        <li className={styles.navbar__listItem}>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__listItem}>
          <Link href="#">
            <BiSearch />
          </Link>
        </li>
        <li className={styles.navbar__listItem}>
          <Link href="/">
            <BsCart2 />
          </Link>
        </li>
        <li className={styles.navbar__listItem}>
          <Link href="/profile">
            <MdPersonOutline />
          </Link>
        </li>
      </ul>
    </div>
  );
  const MobilItem = (
    <ul
      onClick={() => {
        setShowNav(!showNav);
      }}
      className={styles.navbar__list}
    >
      <li className={styles.navbar__listItem}>
        <Link href="/">home</Link>
      </li>
      <li
        style={{ marginLeft: "0px", paddingTop: "2em", paddingBottom: "2em" }}
        className={styles.navbar__listItem}
      >
        <Link href="/products">products</Link>
      </li>
      <li style={{ marginLeft: "0px" }} className={styles.navbar__listItem}>
        <Link href="/contact">contact</Link>
      </li>
    </ul>
  );
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {isMobile && <BrandLogo />}
        {isMobile && (
          <Menu right styles={MenuStyle}>
            {MobilItem}
          </Menu>
        )}
        {!isMobile && navItem}
      </div>
    </nav>
  );
};

export default NavBar;

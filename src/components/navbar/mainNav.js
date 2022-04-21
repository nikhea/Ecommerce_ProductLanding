/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import styles from "./styles/NavBar.module.css";
import { BiSearch } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";
import MenuStyle from "./MenuStyle";
const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

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
  );
  return (
    <nav className={styles.navbar}>
      {isMobile && (
        <Menu right styles={MenuStyle}>
          <a>tudtrdut</a>
        </Menu>
      )}
      {!isMobile && navItem}
    </nav>
  );
};

export default NavBar;

import styles from "./styles/NavBar.module.css";
import Link from "next/link";
const Logo = () => {
  return (
    <div style={{marginLeft:'30px'}} className={styles.navbarLogo}>
      <Link href="/">
        <a>
          <span>E</span>-Shop
        </a>
      </Link>
    </div>
  );
};

export default Logo;

import Image from "next/image";
import BannerMain from "../../assets/images/BannerMain.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}></div>
    </div>
  );
};

export default Banner;

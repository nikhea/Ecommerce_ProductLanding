import Image from "next/image";
import BannerMain1 from "../../assets/images/pexels-lena-hsvl-1021693-removebg-preview.png";
import BannerMain2 from "../../assets/images/pixlr-bg-result.png";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
      <div className={styles.content}>
        <h1>MultiPurpose</h1>
        <h6>best shop in the world</h6>
        <p className="text">
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet
        </p>
        <a className="btn">Get Started</a>
      </div>
    </div>
    </div>
  );
};

export default Banner;

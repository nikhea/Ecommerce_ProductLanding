import styles from "./styles/features.module.css";
import { data } from "./data";
import FeatureItems from "./featuresItem";
const Features = ({ title }) => {
  return (
    <div className={styles.features}>
      <h1 className={styles.features__title}>{title ? title : "Features"}</h1>
      <div className={styles.features__items}>
        {data.map((feature, index) => (
          <FeatureItems key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;

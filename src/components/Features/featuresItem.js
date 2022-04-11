import styles from "./styles/features.module.css";

const Features = ({ feature }) => {
  const { title, description, svg } = feature;
  return (
    <div className={styles.features__item}>
      <div className={styles.features__svg}>{svg}</div>
      <div className={styles.features__content}>
        <h1 className={styles.content__text}>{title}</h1>
        <p className={styles.content__description}>{description}</p>
      </div>
    </div>
  );
};

export default Features;

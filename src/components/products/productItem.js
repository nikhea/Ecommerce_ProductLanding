import Image from "next/image";
import Rating from "../Rating";
import Trouses from "../../../public/img/trouses2.jpg";
import styles from "./styles/ProductItem.module.css";
const productItem = ({ product }) => {
  return (
    <div className="">
      <div className={styles.productImage}>
        <Image
          blurDataURL="blur"
          src={product.image}
          width={250}
          height={250}
          alt={product.title}
          title={product.title}
        />
      </div>
      <div className={styles.content}>
        <h1>
          {product.title.length < 30
            ? product.title
            : `${product.title.substring(0, 20)} ...`}
        </h1>
        <p className={styles.price}>{product.price}$</p>
        {product.rating.rate}
        <Rating rating={product.rating.rate} />
      </div>
    </div>
  );
};

export default productItem;

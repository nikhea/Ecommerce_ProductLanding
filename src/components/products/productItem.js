import Image from "next/image";
import Link from "next/link";
import Rating from "../Rating";
import Trouses from "../../../public/img/trouses2.jpg";
import styles from "./styles/ProductItem.module.css";
const productItem = ({ product }) => {
  return (
    <div className={styles.product}>
   <Link href={`/products/${product.id}`}>
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
   </Link>
      <div className={styles.content}>
        <h1>
          {product.title.length < 30
            ? product.title
            : `${product.title.substring(0, 20)} ...`}
        </h1>
        <p className={styles.price}>{product.price}$</p>
        <Rating rating={product.rating.rate} /> {product.rating.rate}
      </div>
    </div>
  );
};

export default productItem;

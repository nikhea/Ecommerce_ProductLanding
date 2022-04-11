import ProductItem from "./productItem";
import styles from "./styles/ProductList.module.css";
const productsList = ({ products }) => {
  const SlicedProducts = products.slice();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.products}>
        {SlicedProducts.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default productsList;

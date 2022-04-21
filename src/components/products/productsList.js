import { useState } from "react";
import ProductItem from "./productItem";
import styles from "./styles/ProductList.module.css";
import Pagination from "../UI/Pagination";

const ProductsList = ({ products }) => {
  const [SlicedProducts] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;
  const productCount = Math.ceil(SlicedProducts.length / productsPerPage);
  const pagesVisted = pageNumber * productsPerPage;

  const displayProducts = SlicedProducts.slice(
    pagesVisted,
    pagesVisted + productsPerPage
  ).map((product) => (
    <div key={product.id}>
      <ProductItem product={product} />
    </div>
  ));
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.products}>{displayProducts}</div>
      <Pagination ItemCount={productCount} pageChange={pageChange} />
    </div>
  );
};

export default ProductsList;

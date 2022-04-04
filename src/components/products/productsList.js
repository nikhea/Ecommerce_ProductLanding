import React from "react";
import ProductItem from "./productItem"
const productsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
            <ProductItem product={product}/>
           </div>
      ))}
    </div>
  );
};

export default productsList;

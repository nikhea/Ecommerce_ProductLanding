import React from "react";
import Image from "next/image";
const productItem = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h6>{product.description}</h6>
      <p>{product.price}</p>
      <div>
        <Image
          src={product.image}
          layout="fill"
          alt={product.title}
          title={product.description}
        />
      </div>
    </div>
  );
};

export default productItem;

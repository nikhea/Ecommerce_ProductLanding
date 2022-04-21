import { useState } from "react";

import React from "react";

const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;
  const productCount = Math.ceil(SlicedProducts.length / productsPerPage);
  const pagesVisted = pageNumber * productsPerPage;

  return <div>Pagination</div>;
};

export default usePagination;

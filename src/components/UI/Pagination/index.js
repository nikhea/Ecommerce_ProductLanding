import style from "./styles/paginate.module.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ productCount, pageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      pageCount={productCount}
      onPageChange={pageChange}
      containerClassName={style.paginationContainer}
      previousLinkClassName={style.previousBtn}
      nextLinkClassName={style.nextBtn}
      disabledLinkClassName={style.paginationDisabled}
      pageClassName={style.LinkItem}
    />
  );
};

export default Pagination;

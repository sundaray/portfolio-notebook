import React from "react";
import { usePagination, DOTS } from "./hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="w-11/12 sm:w-3/5 md:w-4/12 m-auto my-12 flex justify-between items-center list-none">
      <li>
        <button
          className="bg-gray-100 hover:bg-gray-300 border border-gray-300 rounded px-1 py-0.5"
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          Previous
        </button>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li>&#8230;</li>;
        }

        return (
          <li
            className={`${
              pageNumber === currentPage ? "bg-blue-500" : "border"
            } w-6 h-6 rounded-full flex justify-center items-center cursor-pointer`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li onClick={onNext}>
        <button
          className="bg-gray-100 border border-gray-300 rounded px-1 py-0.5 hover:bg-gray-300"
          disabled={currentPage === lastPage}
          onClick={onNext}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

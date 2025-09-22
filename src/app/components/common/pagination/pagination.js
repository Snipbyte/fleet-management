"use client";
import React, { useState } from "react";
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

const Pagination = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
    onPageChange({ selected: selectedPage });
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 3;

    if (pageCount <= 5) {
      for (let i = 0; i < pageCount; i++) {
        pages.push(
          <li
            key={i}
            className={`w-9 h-9 flex items-center justify-center rounded-md border cursor-pointer ${
              currentPage === i
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i + 1}
          </li>
        );
      }
    } else {
      pages.push(
        <li
          key={0}
          className={`w-9 h-9 flex items-center justify-center rounded-md border cursor-pointer ${
            currentPage === 0
              ? "bg-black text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePageClick(0)}
        >
          1
        </li>
      );

      if (currentPage > maxVisible) {
        pages.push(
          <li key="dots-prev" className="px-2 text-gray-500">
            ...
          </li>
        );
      }

      const start = Math.max(1, currentPage - 1);
      const end = Math.min(pageCount - 2, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(
          <li
            key={i}
            className={`w-9 h-9 flex items-center justify-center rounded-md border cursor-pointer ${
              currentPage === i
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i + 1}
          </li>
        );
      }

      if (currentPage < pageCount - maxVisible - 1) {
        pages.push(
          <li key="dots-next" className="px-2 text-gray-500">
            ...
          </li>
        );
      }

      pages.push(
        <li
          key={pageCount - 1}
          className={`w-9 h-9 flex items-center justify-center rounded-md border cursor-pointer ${
            currentPage === pageCount - 1
              ? "bg-black text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePageClick(pageCount - 1)}
        >
          {pageCount}
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="w-full flex justify-end">
      <ul className="flex items-center gap-2 my-4">
        {/* First */}
        <li
          className={`w-9 h-9 flex items-center justify-center rounded-md border ${
            currentPage === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 cursor-pointer hover:bg-gray-100"
          }`}
          onClick={() => currentPage > 0 && handlePageClick(0)}
        >
          <FiChevronsLeft size={18} />
        </li>

        {/* Prev */}
        <li
          className={`w-9 h-9 flex items-center justify-center rounded-md border ${
            currentPage === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 cursor-pointer hover:bg-gray-100"
          }`}
          onClick={() => currentPage > 0 && handlePageClick(currentPage - 1)}
        >
          <FiChevronLeft size={18} />
        </li>

        {renderPageNumbers()}

        {/* Next */}
        <li
          className={`w-9 h-9 flex items-center justify-center rounded-md border ${
            currentPage === pageCount - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 cursor-pointer hover:bg-gray-100"
          }`}
          onClick={() =>
            currentPage < pageCount - 1 && handlePageClick(currentPage + 1)
          }
        >
          <FiChevronRight size={18} />
        </li>

        {/* Last */}
        <li
          className={`w-9 h-9 flex items-center justify-center rounded-md border ${
            currentPage === pageCount - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 cursor-pointer hover:bg-gray-100"
          }`}
          onClick={() =>
            currentPage < pageCount - 1 && handlePageClick(pageCount - 1)
          }
        >
          <FiChevronsRight size={18} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

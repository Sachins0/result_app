import React from 'react';

const Pagination = ({nextPage, prePage, resultsPerPage, totalResults, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav>
  <ul class="flex">
    <li>
      <a
        onClick={() => prePage()}
        class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-gray-400"
        href="!#"
        aria-label="Previous"
      >
        <span class="material-icons text-sm">⬅ </span>
      </a>
    </li>
    {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link' class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 hover:bg-pink-500">
              {number}
            </a>
          </li>
        ))}
    <li>
      <a
        onClick={() => nextPage()}
        class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-gray-400"
        href="!#"
        aria-label="Next"
      >
        <span class="material-icons text-sm">➡ </span>
      </a>
    </li>
  </ul>
</nav>
  );
};

export default Pagination;
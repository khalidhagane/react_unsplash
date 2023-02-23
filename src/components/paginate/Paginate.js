import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginate({ handlePageClick, totalPages, page }) {
  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel='<'
      renderOnZeroPageCount={null}
      marginPagesDisplayed={2}
      containerClassName={'paginate text-xl font-semibold'}
      pageLinkClassName={
        'paginate__page-link text-white  bg-cyan-600 hover:bg-purple-700 text-xl'
      }
      previousLinkClassName={`paginate__prev-link bg-cyan-600 ${
        page === 1 ? 'disabled' : ''
      }`}
      nextLinkClassName={`paginate__next-link bg-cyan-600  text-xl${
        page === totalPages ? 'disabled' : ''
      }`}
      activeClassName={'active '}
    />
  );
}

export default Paginate;

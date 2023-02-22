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
      containerClassName={'paginate'}
      pageLinkClassName={'paginate__page-link'}
      previousLinkClassName={`paginate__prev-link ${
        page === 1 ? 'disabled' : ''
      }`}
      nextLinkClassName={`paginate__next-link ${
        page === totalPages ? 'disabled' : ''
      }`}
      activeClassName={'active'}
    />
  );
}

export default Paginate;

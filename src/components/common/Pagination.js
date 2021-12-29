import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ setPage, pageCount }) {
  return (
    <div className="row">
      <div className="col">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={(event) => setPage(event.selected + 1)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Pagination;

import React from 'react';

function Search({ filter, setFilter }) {
  return (
    <div className="row mt-3 justify-content-end mb-3">
      <div className="col-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search character..."
          aria-label="Search"
          value={filter.name}
          onChange={(e) => {
            setFilter({ name: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default Search;

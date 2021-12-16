import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Character from './component/Character';

function App() {
  const [page, setPage] = useState(1);
  const { error, data } = useQuery(CHARACTERS, {
    variables: { page: page },
  });

  if (error) return <p>Error: {error.networkError.result.errors[0].message}</p>;

  return (
    <div className="container">
      <h2 className="my-5 text-center">
        {data ? `${data.characters.info.count} records found` : ''}
      </h2>

      <div className="row">
        {data &&
          data.characters.results.map((character) => (
            <Character key={character.id} character={character} />
          ))}
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={(event) => setPage(event.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={data?.characters.info.pages}
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
  );
}

export default App;

const CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        image
        name
        species
        location {
          id
          name
        }
      }
    }
  }
`;

import React from 'react';

function Title({ count }) {
  return (
    <div className="row">
      <div className="col">
        <h2 className="my-4 text-center">{count} records found</h2>
      </div>
    </div>
  );
}

export default Title;

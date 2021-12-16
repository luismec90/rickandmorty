import React from 'react';

function Character({ character }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card">
        <img
          className="card-img-top"
          src={character.image}
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title mt-1">{character.name}</h5>
          <div>
            <strong>Specie:</strong> {character.species}
          </div>
          <div className="text-truncate">
            <strong>Location:</strong> {character.location.name}
          </div>
          <button type="button" className="btn btn-primary w-100 mt-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Character;

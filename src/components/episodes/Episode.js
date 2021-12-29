import React from 'react';
import { Carousel } from 'react-bootstrap';

function Episode({ episode }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card">
        <Carousel
          id={`carousel-${episode.id}`}
          className="carousel-fade"
          autoPlay={true}
          indicators={false}
        >
          {episode.characters.map((character, index) => (
            <Carousel.Item key={index} interval={5000}>
              <img
                className="d-block w-100"
                src={character.image}
                alt={character.name}
              />
              <Carousel.Caption>
                <h3>{character.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="card-body">
          <div className="text-truncate">
            <strong>Episode:</strong> {episode.name}
          </div>
          <div className="text-truncate">
            <strong>Air date:</strong> {episode.air_date}
          </div>
          <button type="button" className="btn btn-primary w-100 mt-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Episode;

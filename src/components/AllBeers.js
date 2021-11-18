import Header from './Header';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://ih-beers-api2.herokuapp.com/beers',
    })
      .then((response) =>
        setAllBeers(
          response.data.map((currentBeerObj) => {
            return (
              <div key={currentBeerObj.name} className="container">
                <div className="row border-bottom border-light d-flex flex-row align-items-center mb-2">
                  <div className="d-flex flex-row justify-center col-3">
                    <Link to={`/beers/${currentBeerObj._id}`}>
                      <img
                        style={{ height: '150px' }}
                        className="p-3 me-3"
                        src={currentBeerObj.image_url}
                        alt={currentBeerObj.name}
                      />
                    </Link>
                  </div>

                  <div className="d-flex flex-column col-9 ps-3">
                    <h3>{currentBeerObj.name}</h3>
                    <p className="text-muted  p-1 m-1 lh-1">
                      {currentBeerObj.tagline}
                    </p>
                    <small className="pt-2 m-0 lh-1">
                      <span className="fw-bold">Created by: </span>
                      {currentBeerObj.name}
                    </small>
                  </div>
                </div>
              </div>
            );
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {allBeers}
    </div>
  );
}

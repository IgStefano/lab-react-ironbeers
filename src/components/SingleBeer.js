import Header from './Header';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function SingleBeer(props) {
  const params = useParams();

  const [thisBeer, setThisBeer] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://ih-beers-api2.herokuapp.com/beers/${
        props.id ? props.id : params.id
      }`,
    })
      .then((response) => {
        setThisBeer({ ...response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(thisBeer);

  return (
    <div>
      <Header />
      <div className="mx-3">
        <div className="d-flex justify-content-center">
          <img
            style={{ height: '350px' }}
            className="p-3 me-3"
            src={thisBeer.image_url}
            alt={thisBeer.name}
          />
        </div>
        <div className="container">
          <div className="d-flex flew-row justify-content-between mb-0 align-items-center">
            <h1>{thisBeer.name}</h1>
            <aside
              style={{ fontSize: '1.4rem' }}
              className="text-muted fw-lighter"
            >
              {thisBeer.attenuation_level}
            </aside>
          </div>
          <div className="d-flex flew-row justify-content-between align-items-center">
            <h5 className="text-muted fw-light lh-1">{thisBeer.tagline}</h5>
            <aside className="fw-bolder">{thisBeer.first_brewed}</aside>
          </div>
        </div>
        <div>
          <p>{thisBeer.description}</p>
          <small className="text-muted fw-bold p-1 m-1">
            {thisBeer.contributed_by}
          </small>
        </div>
      </div>
    </div>
  );
}

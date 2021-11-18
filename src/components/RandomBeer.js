import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';
import { useNavigate } from 'react-router-dom';

export default function RandomBeer() {
  const [randomId, setRandomId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://ih-beers-api2.herokuapp.com/beers/random',
    })
      .then((response) => {
        setRandomId(response.data._id);
        console.log(randomId);
      })
      .catch((err) => console.log(err));
  }, [randomId, navigate]);

  navigate(`/beers/${randomId}`);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center display-1 vh-100">
        Carregando...
      </div>
    </div>
  );
}

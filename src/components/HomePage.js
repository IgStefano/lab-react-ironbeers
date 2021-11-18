import { Link } from 'react-router-dom';
import React from 'react';
import AllBeersImg from '../assets/beers.png';
import RandomBeerImg from '../assets/random-beer.png';
import NewBeerImg from '../assets/new-beer.png';

export default function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <div>
          <img src={AllBeersImg} alt="All beers" />
        </div>

        <h1>All Beers</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus
        est ut erat posuere pretium. Donec imperdiet aliquet ultrices. Maecenas
        ac nunc ac lectus pharetra rhoncus. Maecenas sit amet malesuada orci. In
        placerat scelerisque diam vel posuere. Duis vel lectus condimentum,
        semper ante vitae, mattis tortor. Cras in condimentum mauris.
      </p>
      <Link to="/random-beer">
        <div>
          <img src={RandomBeerImg} alt="Random beer" />
        </div>
        <h1>Random Beer</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus
        est ut erat posuere pretium. Donec imperdiet aliquet ultrices. Maecenas
        ac nunc ac lectus pharetra rhoncus. Maecenas sit amet malesuada orci. In
        placerat scelerisque diam vel posuere. Duis vel lectus condimentum,
        semper ante vitae, mattis tortor. Cras in condimentum mauris.
      </p>
      <Link to="new-beer">
        <div>
          <img src={NewBeerImg} alt="New beer" />
        </div>

        <h1>New Beer</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus
        est ut erat posuere pretium. Donec imperdiet aliquet ultrices. Maecenas
        ac nunc ac lectus pharetra rhoncus. Maecenas sit amet malesuada orci. In
        placerat scelerisque diam vel posuere. Duis vel lectus condimentum,
        semper ante vitae, mattis tortor. Cras in condimentum mauris.
      </p>
    </div>
  );
}

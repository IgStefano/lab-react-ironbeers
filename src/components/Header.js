import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <div>
      <Link className="text-decoration-none" to="/">
        <header
          style={{ height: '40px', fontSize: '1.2rem' }}
          className="bg-info d-flex justify-content-center align-items-center text-light"
        >
          <i className="fa fa-home fa-2x"></i>
        </header>
      </Link>
    </div>
  );
};

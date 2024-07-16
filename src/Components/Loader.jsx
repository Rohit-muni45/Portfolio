import React from 'react';
import { BallTriangle } from 'react-loading-icons';
import './index.css';



const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <BallTriangle stroke="#007bff" width={150} height={250} />
    </div>
  );
};

export default Loader;

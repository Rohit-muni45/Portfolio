import React from 'react';
import { HashLoader } from 'react-spinners';
import './index.css';



const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <HashLoader
        loading={loading}
        color = "blue"
        size={80}
       />
    </div>
  );
};

export default Loader;


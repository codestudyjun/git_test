import React from 'react';
import './Box.css';

const Box = ({ text }) => {
  return (
    <div className="box">
      <p>{text}</p>
    </div>
  );
};

export default Box;
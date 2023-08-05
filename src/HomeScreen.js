import React from 'react';
import "./homeScreen.css";
import Container1 from './Container1';
import Container2 from './Container2';
import Container4 from './Container4';
import Container3 from './Container3';

function homeScreen() {
  return (
    <div className='homeScreen'>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        </div>
  );
};

export default homeScreen;
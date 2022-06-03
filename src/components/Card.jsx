import React from 'react';
import '../stylesheets/card.css';

const Card = ({ imagenOfPeople, nameOfPeople, testimonyOfPeople }) => {

  return (

    <div className='card'>

      <div className='img'>

        <img src={imagenOfPeople} alt='Person' />

      </div>

      <div className='testimony'>

        <h2>{nameOfPeople}</h2>
        <p>{testimonyOfPeople}</p>

      </div>

    </div>

  );
};

export default Card;
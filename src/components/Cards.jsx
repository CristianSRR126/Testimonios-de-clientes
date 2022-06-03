import React from 'react';
import Card from './Card';
import person1 from '../img/person1.jpg';
import person2 from '../img/person2.jpg';
import person3 from '../img/person3.jpg';
import '../stylesheets/cards.css';

const Cards = () => {

  const testimonyOfPeople = {

    img: {
      person1: person1,
      person2: person2,
      person3: person3
    },
    name: {
      'name person 1': 'Camila',
      'name person 2': 'Sergio',
      'name person 3': 'Reimon'
    },
    testimony: '"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos."'

  };

  return (

    <div className='cards'>

      <Card
        imagenOfPeople={testimonyOfPeople.img.person1}
        nameOfPeople={testimonyOfPeople.name['name person 1']}
        testimonyOfPeople={testimonyOfPeople.testimony}
      />

      <Card
        imagenOfPeople={testimonyOfPeople.img.person2}
        nameOfPeople={testimonyOfPeople.name['name person 2']}
        testimonyOfPeople={testimonyOfPeople.testimony}
      />

      <Card
        imagenOfPeople={testimonyOfPeople.img.person3}
        nameOfPeople={testimonyOfPeople.name['name person 3']}
        testimonyOfPeople={testimonyOfPeople.testimony}
      />

    </div>

  );
};

export default Cards;
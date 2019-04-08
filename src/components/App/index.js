/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';
import Messages from '../Messages';

import './app.scss';

/**
 * Code
 */
const array = [
  {
    image: 'https://wp.oclock.io/wp-content/uploads/2017/07/fabparty4-800x550.jpg',
    header: 'Nom du repo',
    meta: 'Nom de l\'auteur',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam enim, odio maxime suscipit, dolorem quasi repellendus asperiores tenetur voluptates, quos animi sunt officiis magnam voluptatum aspernatur? Sequi, ipsa. Totam, ex?',
  },
  {
    image: 'https://wp.oclock.io/wp-content/uploads/2017/07/fabparty4-800x550.jpg',
    header: 'Nom du repo',
    meta: 'Nom de l\'auteur',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam enim, odio maxime suscipit, dolorem quasi repellendus asperiores tenetur voluptates, quos animi sunt officiis magnam voluptatum aspernatur? Sequi, ipsa. Totam, ex?',
  },
  {
    image: 'https://wp.oclock.io/wp-content/uploads/2017/07/fabparty4-800x550.jpg',
    header: 'Nom du repo',
    meta: 'Nom de l\'auteur',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam enim, odio maxime suscipit, dolorem quasi repellendus asperiores tenetur voluptates, quos animi sunt officiis magnam voluptatum aspernatur? Sequi, ipsa. Totam, ex?',
  },
];


const App = () => (
  <div id="app">
    <SearchBar
      text="toto"
    />
    <Messages />
    <ReposResults list={array} />
  </div>
);

/**
 * Export
 */
export default App;

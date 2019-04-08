/**
 * Npm import
 */
import React, { Component } from 'react';

/**
 * Local import
 */
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';
import Messages from '../Messages';

import axios from 'axios';

import './app.scss';

/**
 * Code
 */

const array = [
  {
    id:'kjsdfkjhsdfk1',
    image: 'https://wp.oclock.io/wp-content/uploads/2017/07/fabparty4-800x550.jpg',
    header: 'Nom du repo',
    meta: 'Nom de l\'auteur',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam enim, odio maxime suscipit, dolorem quasi repellendus asperiores tenetur voluptates, quos animi sunt officiis magnam voluptatum aspernatur? Sequi, ipsa. Totam, ex?',
  },
  {
    id:'kjsdfkjhsdfk2',
    image: 'https://wp.oclock.io/wp-content/uploads/2017/07/fabparty4-800x550.jpg',
    header: 'Nom du repo',
    meta: 'Nom de l\'auteur',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam enim, odio maxime suscipit, dolorem quasi repellendus asperiores tenetur voluptates, quos animi sunt officiis magnam voluptatum aspernatur? Sequi, ipsa. Totam, ex?',
  },
  {
    id:'kjsdfkjhsdfk3',
    image: 'https://wp.oclock.io/wp-content/uploads/2017/07/fabparty4-800x550.jpg',
    header: 'Nom du repo',
    meta: 'Nom de l\'auteur',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam enim, odio maxime suscipit, dolorem quasi repellendus asperiores tenetur voluptates, quos animi sunt officiis magnam voluptatum aspernatur? Sequi, ipsa. Totam, ex?',
  },
];


class App extends Component {
  state = {
    list: array,
    textInput: '',
  }

  changeInput = (evt) => {
    const { value } = evt.target;
    this.setState({
      textInput: value,
    });
  }

  handleSubmitSearch = () => {
    const { textInput } = this.state;
    // console.log('envoi de la requête: ', textInput);
    // C'est l'heure de faire la requete avec axios
    axios.get(`https://api.github.com/search/repositories?q=${textInput}`)
      .then(console.log)
      .catch(console.log);
  }

  render() {
    const { list, textInput } = this.state;
    return (
      <div id="app">
        <SearchBar
          text={textInput}
          onChangeInput={this.changeInput}
          handleSubmitSearch={this.handleSubmitSearch}
        />
        <Messages
          title="Oups, something went wrong"
          message="We were unable to load your repos"
        />
        <ReposResults list={list} />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;

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
    list: [],
    textInput: '',
    errorMessage: false,
  }

  changeInput = (evt) => {
    const { value } = evt.target;
    this.setState({
      textInput: value,
    });
  }

  handleSubmitSearch = () => {
    const { textInput } = this.state;
    // console.log(textInput);
    // Je peux vérifier que la valeur de l'input n'est pas vide
    if (textInput.trim() === '') {
      this.setState({
        errorMessage: 'Merci de saisir un nom à rechercher',
      });
      return false;
    }

    // C'est l(heure de faire la requête avec axios
    axios.get(`https://api.github.com/search/repositories?q=${textInput}`)
      .then((results) => {
        const formattedResults = results.data.items.map(repo => (
          {
            id: repo.id,
            image: repo.owner.avatar_url,
            meta: repo.owner.login,
            header: repo.name,
            description: repo.description,
          }
        ));
        this.setState({
          list: formattedResults,
          errorMessage: false,
        });
      })
      .catch((error) => {
        // console.log(error.message);
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    const { list, textInput, errorMessage } = this.state;
    return (
      <div id="app">
        <SearchBar
          text={textInput}
          onChangeInput={this.changeInput}
          handleSubmitSearch={this.handleSubmitSearch}
        />
        { errorMessage && (
          <Messages
            title="Oups, something went wrong"
            message={errorMessage}
          />
        )}
        
        <ReposResults list={list} />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;

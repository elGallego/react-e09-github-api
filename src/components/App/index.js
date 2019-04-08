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
const App = () => (
  <div id="app">
    <SearchBar />
    <Messages />
    <ReposResults />
  </div>
);

/**
 * Export
 */
export default App;

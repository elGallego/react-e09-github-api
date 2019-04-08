import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChangeInput, handleSubmitSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // J'appelle la méthode de l'app
    // pour faire la requête
    handleSubmitSearch();
  };
  return (
    <Segment inverted>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Search for repos"
          value={text}
          onChange={onChangeInput}
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  handleSubmitSearch: PropTypes.func.isRequired,
};

export default SearchBar;

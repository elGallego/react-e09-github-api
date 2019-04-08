import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({text}) => {
  return (
    <Segment inverted>
      <Form>
        <Form.Input
          placeholder="Search for repos"
          value={text}
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SearchBar;

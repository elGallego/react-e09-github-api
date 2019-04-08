import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = () => {
  return (
    <Segment inverted>
      <Form>
        <Form.Input placeholder="Search for repos" />
      </Form>
    </Segment>
  );
};


export default SearchBar

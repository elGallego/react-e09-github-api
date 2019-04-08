import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Messages = ({ title, message }) => {
  return (
    <Message negative>
      <Message.Header> { title }</Message.Header>
      <p> { message }</p>
    </Message>
  );
};

Messages.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Messages;


import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Messages = () => {
  return (
    <Message negative>
      <Message.Header>We're sorry we can't apply that discount</Message.Header>
      <p>That offer has expired</p>
    </Message>
  );
};


export default Messages;


import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ReposResults = ({list}) => {
  return (
    <div id="repos-results">
      <Card.Group>
        {
          list.map(({
            image, header, meta, description, id,
          }) => (
            <Card
              key={id}
              image={image}
              header={header}
              meta={meta}
              description={description}
            />
          ))
        }
        
      </Card.Group>
    </div>
  );
};

ReposResults.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      meta: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;


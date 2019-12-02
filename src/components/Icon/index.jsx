import PropTypes from 'prop-types';
import React from 'react';

import Loading from './Loading';
import LoadingDouble from './Loading-double';
import User from './User';

const Icon = ({
  type,
  ...remainingProps
}) => {
  switch (type) {
    case 'loading':
      return <Loading {...remainingProps} />;
    case 'loading-double':
      return <LoadingDouble {...remainingProps} />;
    case 'user':
      return <User {...remainingProps} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  type: PropTypes.string,
};

Icon.defaultProps = {
  type: '',
};

export default Icon;

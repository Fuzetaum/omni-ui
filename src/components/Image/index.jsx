import PropTypes from 'prop-types';
import React, { useState } from 'react';

import placeholder from './placeholder';

const OmniUIImage = ({
  source,
  ...remainingProps
}) => {
  const [src, setSrc] = useState(placeholder);

  const sourceImg = new Image();
  sourceImg.src = source;
  sourceImg.decode()
    .then(() => setSrc(sourceImg.src))
    .catch(error => console.error(error));

  return (
    <img
      {...remainingProps}
      src={src}
    />
  );
};

OmniUIImage.propTypes = {
  source: PropTypes.string,
};

OmniUIImage.defaultProps = {
  source: placeholder,
};

export default OmniUIImage;

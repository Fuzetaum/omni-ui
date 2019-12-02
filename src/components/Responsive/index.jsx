import PropTypes from 'prop-types';
import React from 'react';

import useWindowSize from '../../useWindowSize';

const Responsive = ({
  children,
  hideAboveHeight,
  hideAboveWidth,
  hideUnderHeight,
  hideUnderWidth,
}) => {
  const [width, height] = useWindowSize();

  const renderElement = () => (
    <div>{children}</div>
  );

  if (hideAboveHeight < 0 && hideAboveWidth < 0 && hideUnderHeight < 0 && hideUnderWidth < 0) {
    return renderElement();
  } else if (hideAboveHeight > 0 && hideAboveHeight < height) return null;
  else if (hideAboveWidth > 0 && hideAboveWidth < width) return null;
  else if (hideUnderHeight > 0 && hideUnderHeight > height) return null;
  else if (hideUnderWidth > 0 && hideUnderWidth > width) return null;

  return renderElement();
};

Responsive.propTypes = {
  children: PropTypes.node,
  hideAboveHeight: PropTypes.number,
  hideAboveWidth: PropTypes.number,
  hideUnderHeight: PropTypes.number,
  hideUnderWidth: PropTypes.number,
};

Responsive.defaultProps = {
  children: null,
  hideAboveHeight: -1,
  hideAboveWidth: -1,
  hideUnderHeight: -1,
  hideUnderWidth: -1,
};

export default Responsive;

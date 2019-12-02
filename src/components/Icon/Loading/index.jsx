import React from 'react';

import { THEME_DEFAULT_COLOR_TEXT } from '../../../theme';

import './index.scss';

const Loading = ({ ...remainingProps }) =>
  <i
    {...remainingProps}
    className={`lds-ring ${remainingProps.className}`}
    style={{
      ...remainingProps.style,
      borderColor: (remainingProps.style && remainingProps.style.borderColor) || `${THEME_DEFAULT_COLOR_TEXT} transparent transparent transparent`,
    }}
  >
    <div />
    <div />
  </i>;

export default Loading;

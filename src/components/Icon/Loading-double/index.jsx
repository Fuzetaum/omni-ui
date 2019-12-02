import React from 'react';

import { THEME_DEFAULT_COLOR_TEXT } from '../../../theme';

import './index.scss';

const Loading = ({ ...remainingProps }) =>
  <i
    {...remainingProps}
    className={`lds-dbl-ring ${remainingProps.className}`}
  >
    <div
      style={{
        ...remainingProps.style,
        borderColor: (remainingProps.style && remainingProps.style.borderColor) || `${THEME_DEFAULT_COLOR_TEXT} transparent transparent transparent`,
      }}
    />
    <div
      style={{
        ...remainingProps.style,
        borderColor: (remainingProps.style && remainingProps.style.borderColor) || `${THEME_DEFAULT_COLOR_TEXT} transparent transparent transparent`,
      }}
    />
    <div
      style={{
        ...remainingProps.style,
        borderColor: (remainingProps.style && remainingProps.style.borderColor) || `transparent transparent ${THEME_DEFAULT_COLOR_TEXT} transparent`,
      }}
    />
    <div
      style={{
        ...remainingProps.style,
        borderColor: (remainingProps.style && remainingProps.style.borderColor) || `transparent transparent ${THEME_DEFAULT_COLOR_TEXT} transparent`,
      }}
    />
  </i>;

export default Loading;

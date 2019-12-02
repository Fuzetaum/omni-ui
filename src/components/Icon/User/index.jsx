import React from 'react';

import { THEME_DEFAULT_COLOR_TEXT } from '../../../theme';

import './index.scss';

const User = ({ ...remainingProps }) => {
  return (
    <i className="omni-ui-icon-user" {...remainingProps}>
      <svg width="100%" height="100%">
        <circle
          cx="50%" cy="30%" r="calc(30% - 1px)"
          stroke={(remainingProps.style && remainingProps.style.color) || THEME_DEFAULT_COLOR_TEXT} strokeWidth="2"
          fill="transparent"
        />
        <path
          d="M 2 16 q 6 -14 12 0"
          stroke={(remainingProps.style && remainingProps.style.color) || THEME_DEFAULT_COLOR_TEXT} strokeWidth="2"
          fill="none"
        />
      </svg>
    </i>
  );
};

export default User;

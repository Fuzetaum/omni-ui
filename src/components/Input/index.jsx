import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { THEME_DEFAULT_COLOR_MEDIUM, THEME_PRIMARY_COLOR_MEDIUM } from '../../theme';

import './index.scss';

const Input = ({
  className,
  style,
  value,
  onBlur,
  onFocus,
  onInputChange,
  ...remainingProps
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  return <input
    {...remainingProps}
    className={`omni-ui-input ${className}`}
    style={{
      ...style,
      border: style.border || `1px solid ${style.borderColor || THEME_DEFAULT_COLOR_MEDIUM}`,
      outline: hasFocus ? `2px solid ${THEME_PRIMARY_COLOR_MEDIUM}` : 'transparent',
      MozOutlineRadius: '6px',
    }}
    value={value}
    onBlur={(event) => { onBlur(event); setHasFocus(false); }}
    onChange={(event) => {
      onInputChange(event.target.value);
    }}
    onFocus={(event) => { onFocus(event); setHasFocus(true); }}
  />;
};

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onInputChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  style: {},
  value: undefined,
  onBlur: () => {},
  onFocus: () => {},
  onInputChange: () => {},
};

export default Input;

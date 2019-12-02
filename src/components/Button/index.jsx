import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Icon from '../Icon';

import { darken } from '../../colorMath';

import {
  THEME_CAUTION_COLOR_BRIGHT,
  THEME_CAUTION_COLOR_MEDIUM,
  THEME_CAUTION_COLOR_TEXT,
  THEME_DEFAULT_COLOR_BRIGHT,
  THEME_DEFAULT_COLOR_MEDIUM,
  THEME_DEFAULT_COLOR_TEXT,
  THEME_PRIMARY_COLOR_BRIGHT,
  THEME_PRIMARY_COLOR_MEDIUM,
  THEME_PRIMARY_COLOR_TEXT,
} from '../../theme';

import './index.scss';

const Button = ({
  children,
  loading,
  type,
  ...remainingProps
}) => {
  const reference = React.createRef();
  const [mouseOver, setMouseOver] = useState(false);

  const isButtonDisabled = () => type === 'disabled' || loading;

  const getTypeColorTheme = () => {
    switch (type) {
      case 'caution':
        return ({
          backgroundColor: (remainingProps.style && remainingProps.style.backgroundColor) || THEME_CAUTION_COLOR_BRIGHT,
          borderColor: (remainingProps.style && remainingProps.style.borderColor) || THEME_CAUTION_COLOR_MEDIUM,
          color: (remainingProps.style && remainingProps.style.color) || THEME_CAUTION_COLOR_TEXT,
        });
      case 'primary':
          return ({
            backgroundColor: (remainingProps.style && remainingProps.style.backgroundColor) || THEME_PRIMARY_COLOR_BRIGHT,
            borderColor: (remainingProps.style && remainingProps.style.borderColor) || THEME_PRIMARY_COLOR_MEDIUM,
            color: (remainingProps.style && remainingProps.style.color) || THEME_PRIMARY_COLOR_TEXT,
          });
      default:
        return ({
          backgroundColor: (remainingProps.style && remainingProps.style.backgroundColor) || THEME_DEFAULT_COLOR_BRIGHT,
          borderColor: (remainingProps.style && remainingProps.style.borderColor) || THEME_DEFAULT_COLOR_MEDIUM,
          color: (remainingProps.style && remainingProps.style.color) || THEME_DEFAULT_COLOR_TEXT,
        });
    }
  };

  const getColorStyle = () => {
    const { backgroundColor, borderColor, color } = getTypeColorTheme();

    return {
      ...remainingProps.style,
      backgroundColor: type === 'disabled' ? 'rgb(204, 204, 204)': backgroundColor,
      borderColor: type === 'disabled' ? 'rgb(163, 163, 163)'
        : (mouseOver ? darken(borderColor, 0.1) : borderColor),
      color: type === 'disabled' ? 'rgb(140, 140, 140)' : (mouseOver ? darken(color, 0.1) : color),
      opacity: loading ? '0.6' : '1',
    };
  };

  const handleMouseEnter = () => setMouseOver(true);

  const handleMouseLeave = () => setMouseOver(false);

  return (
    <button
      {...remainingProps}
      className={`omni-ui-button ${isButtonDisabled() ? 'omni-ui-button-disabled' : ''}`}
      ref={reference}
      style={getColorStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isButtonDisabled() ? () => {} : remainingProps.onClick}
    >
      {children}
      {loading ? <Icon type="loading" /> : null}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  loading: false,
  type: '',
};

export default Button;

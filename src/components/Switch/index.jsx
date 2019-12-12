import PropTypes from 'prop-types';
import React from 'react';

import { darken } from '../../colorMath';

import {
  THEME_DEFAULT_COLOR_DARK,
  THEME_DEFAULT_COLOR_TEXT,
  THEME_PRIMARY_COLOR_BRIGHT,
  THEME_PRIMARY_COLOR_DARK,
  THEME_PRIMARY_COLOR_TEXT,
} from '../../theme';

import './index.scss';

const Switch = ({
  checked,
  checkedLabel,
  sliderStyle,
  style,
  uncheckedLabel,
  onChange,
  ...remainingProps
}) => {
  return (
    <>
      <div
        {...remainingProps}
        className={`omni-ui-switch ${checked ? 'omni-ui-switch-checked' : ''}`}
        style={{
          ...style,
          backgroundColor: style.backgroundColor || (
            checked ? THEME_PRIMARY_COLOR_DARK : THEME_DEFAULT_COLOR_DARK),
          borderColor: style.borderColor || (
            checked ? THEME_PRIMARY_COLOR_BRIGHT : darken(THEME_DEFAULT_COLOR_DARK, 0.1)),
          borderWidth: style.borderWidth || '2px',
          borderStyle: style.borderStyle || 'solid',
        }}
        onClick={() => onChange(!checked)}
      >
        <span
          className="omni-ui-switch-label"
          style={{ color: style.color || (
            checked ? THEME_PRIMARY_COLOR_TEXT : THEME_DEFAULT_COLOR_TEXT),
          }}
        >
          {checked ? checkedLabel : uncheckedLabel}
        </span>
        <span
          className="omni-ui-switch-slider"
          style={{
            ...sliderStyle,
            backgroundColor: sliderStyle.backgroundColor || THEME_PRIMARY_COLOR_BRIGHT,
          }}
        />
      </div>
    </>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  checkedLabel: PropTypes.node,
  sliderStyle: PropTypes.object,
  style: PropTypes.object,
  uncheckedLabel: PropTypes.node,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  checkedLabel: ' ',
  sliderStyle: {},
  style: {},
  uncheckedLabel: ' ',
  onChange: () => {},
};

export default Switch;

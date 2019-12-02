import PropTypes from 'prop-types';
import React, { useState } from 'react';

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
  interruptorStyle,
  style,
  uncheckedLabel,
  ...remainingProps
}) => {
  const [isOn, setIsOn] = useState(checked);

  return (
    <>
      <div
        {...remainingProps}
        className={`omni-ui-switch ${isOn ? 'omni-ui-switch-checked' : ''}`}
        style={{
          ...style,
          backgroundColor: style.backgroundColor || (
            isOn ? THEME_PRIMARY_COLOR_DARK : THEME_DEFAULT_COLOR_DARK),
          borderColor: style.borderColor || (
            isOn ? THEME_PRIMARY_COLOR_BRIGHT : darken(THEME_DEFAULT_COLOR_DARK, 0.1)),
          borderWidth: style.borderWidth || '2px',
          borderStyle: style.borderStyle || 'solid',
        }}
      >
        {isOn ? null : (
          <p style={{ color: style.color || THEME_DEFAULT_COLOR_TEXT }}>
            {uncheckedLabel}
          </p>
        )}
        <div
          style={{
            ...interruptorStyle,
            backgroundColor: interruptorStyle.backgroundColor || THEME_PRIMARY_COLOR_BRIGHT,
          }}
          onClick={() => setIsOn(!isOn)}
        />
        {isOn ? (
          <p style={{ color: style.color || THEME_PRIMARY_COLOR_TEXT }}>
            {checkedLabel}
          </p>
        ) : null}
      </div>
    </>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  checkedLabel: PropTypes.node,
  interruptorStyle: PropTypes.object,
  style: PropTypes.object,
  uncheckedLabel: PropTypes.node,
};

Switch.defaultProps = {
  checked: false,
  checkedLabel: null,
  interruptorStyle: {},
  style: {},
  uncheckedLabel: null,
};

export default Switch;

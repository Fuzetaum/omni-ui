import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  useMemo,
  useRef,
  PropsWithChildren,
  HTMLAttributes,
} from 'react';

import Icon from '../Icon';

import './style.scss';

export type ButtonType = {
  loading?: boolean,
  type?: 'caution' | 'primary' | 'default' | 'disabled',
} & PropsWithChildren & HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonType> = ({
  children,
  loading = false,
  type = 'default',
  ...remainingProps
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const isButtonDisabled = useMemo(() => type === 'disabled' || loading, [type, loading]);

  const classNames = useMemo(
    () => classnames(
      'omni-ui-button',
      `omni-ui-button-${type}`,
      { ['omni-ui-button-disabled']: isButtonDisabled },
      remainingProps.className,
    ),
    [remainingProps.className]
  );

  return (
    <button
      {...remainingProps}
      className={classNames}
      ref={ref}
      onClick={isButtonDisabled ? () => {} : remainingProps.onClick}
    >
      {children}
      {loading ? <Icon type="loading" /> : null}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['caution', 'primary', 'default', 'disabled']),
};

Button.defaultProps = {
  children: null,
  loading: false,
  type: 'default',
};

export default Button;

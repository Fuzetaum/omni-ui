import React from 'react';
import { storiesOf } from '@storybook/react';

import Switch from './index';

// eslint-disable-next-line no-undef
storiesOf('Switch', module)
  .add('Default', () => (
    <>
      <Switch />
    </>
  ))
  .add('With labels', () => (
    <>
      <Switch
        checkedLabel="ON"
        uncheckedLabel="OFF"
      />
    </>
  ))
;

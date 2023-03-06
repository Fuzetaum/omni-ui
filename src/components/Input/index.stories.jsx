import React, { useState } from 'react';

import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = () => <Input />;

export const SettingTheValue = () => (
  <>
    <p>To control its value, use the <strong>value</strong> property. While <i>undefined</i> will behave as if the value wasn&apos;t set, any other value will be interpreted as a valid value.</p>
    <Input
      style={{ width: '50%' }}
      value="This value was passed as a string constant, and will not change"
    />
  </>
);

export const ControllingValueChanges = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <p>The event <strong>onInputChange</strong> can be used to control when the typed value changes. It&apos;s a function-type property, that passes the new typed value as first parameter.</p>
      <p>In this example, the initial <i>value</i> is an empty string, and at every character typed, its value is changed.</p>
      <Input
        style={{ width: '50%' }}
        value={value}
        onInputChange={setValue}
      />
    </>
  );
};

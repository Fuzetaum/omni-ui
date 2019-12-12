import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Switch from './index';

// eslint-disable-next-line no-undef
storiesOf('Switch', module)
  .add('Default', () => (
    <>
      <p style={{ margin: '10px 0' }}>Standard switch, with no props. Note that you can click it to view its animation when it&apos;s clicked, but its status will not change.</p>
      <p style={{ margin: '10px 0' }}>Go to the section <strong>Controlling state</strong> in order to understand how to manipulate its checked status.</p>
      <Switch />
    </>
  ))
  .add('With labels', () => (
    <>
      <p style={{ margin: '10px 0' }}>Use the property <strong>checkedChildren</strong> in order to set the switch&apos;s inner content when it&apos;s checked.</p>
      <Switch
        checked
        checkedLabel="ON"
      />
      <p style={{ margin: '10px 0' }}>Use the property <strong>uncheckedChildren</strong> in order to set the switch&apos;s inner content when it&apos;s not checked.</p>
      <Switch
        uncheckedLabel="OFF"
      />
    </>
  ))
  .add('Controlling state', () => {
    const [checked, setChecked] = useState(false);

    return (
      <>
        <p style={{ margin: '10px 0' }}>To control wether the switch is on or off, use the property <strong>checked</strong>.</p>
        <Switch
          checked={false}
          checkedLabel="True"
          uncheckedLabel="False"
        />
        <p style={{ margin: '10px 0' }}>In order to control state changes when the switch is toggled, use the property <strong>onChange</strong>, with its argument as the switch&apos;s next state.</p>
        <Switch
          checked={checked}
          checkedLabel="True"
          uncheckedLabel="False"
          onChange={nextChecked => setChecked(nextChecked)}
        />
      </>
    );
  })
  .add('Slider style', () => {
    const [checked, setChecked] = useState(false);

    return (
      <>
        <p style={{ margin: '10px 0' }}>If you want to programatically customize only the slider, use the property <strong>sliderStyle</strong>.</p>
        <Switch
          checked={checked}
          checkedLabel="ON"
          uncheckedLabel="OFF"
          sliderStyle={{ backgroundColor: checked ? 'blue' : 'white' }}
          onChange={nextChecked => setChecked(nextChecked)}
        />
      </>
    );
  })
;

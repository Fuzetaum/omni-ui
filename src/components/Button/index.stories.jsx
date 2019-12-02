import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

// eslint-disable-next-line no-undef
storiesOf('Button', module)
  .add('Default', () => (
    <>
      <p style={{ marginBottom: '10px' }}>By not defining an expected value for the <strong>type</strong> property, the button will use the <strong>default</strong> theme styling.</p>
      <Button>Click me</Button>
    </>
  ))
  .add('Primary', () => (
    <>
      <p style={{ marginBottom: '10px' }}>To use the current theme&apos;s <strong>primary</strong> styling, add the property <strong>type</strong>, with a value <strong>&ldquo;primary&rdquo;</strong>.</p>
      <Button type="primary">Click me</Button>
    </>
  ))
  .add('Caution', () => (
    <>
      <p style={{ marginBottom: '10px' }}>To use the current theme&apos;s <strong>caution</strong> styling, add the property <strong>type</strong>, with a value <strong>&ldquo;caution&rdquo;</strong>.</p>
      <Button type="caution">Click me</Button>
    </>
  ))
  .add('Disabled', () => (
    <>
      <p style={{ marginBottom: '10px' }}>To disable the button, add the property <strong>type</strong>, with a value <strong>&ldquo;disabled&rdquo;</strong>.</p>
      <Button type="disabled" onClick={action('button clicked')}>Click me</Button>
    </>
  ))
  .add('Loading', () => (
    <>
      <p style={{ marginBottom: '10px' }}>If you set the property <strong>loading</strong> to <strong>true</strong>, the button will be disabled and an animated loading icon will be displayed in the right-side of the button&apos;s content.</p>
      <Button loading>Click me</Button>
    </>
  ))
  .add('Click event', () => (
    <>
      <p style={{ marginBottom: '10px' }}>To define the button&apos;s click behavior, use the <strong>onClick</strong> event, the same way React suggests.</p>
      <Button onClick={action('button clicked')}>Click me</Button>
    </>
  ))
;

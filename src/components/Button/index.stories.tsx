import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => (
  <>
    <p style={{ marginBottom: '10px' }}>By not defining an expected value for the <strong>type</strong> property, the button will use the <strong>default</strong> theme styling.</p>
    <Button>Click me</Button>
  </>
);

export const Primary = () => (
  <>
    <p style={{ marginBottom: '10px' }}>To use the current theme&apos;s <strong>primary</strong> styling, add the property <strong>type</strong>, with a value <strong>&ldquo;primary&rdquo;</strong>.</p>
    <Button type="primary">Click me</Button>
  </>
);

export const Caution = () => (
  <>
    <p style={{ marginBottom: '10px' }}>To use the current theme&apos;s <strong>caution</strong> styling, add the property <strong>type</strong>, with a value <strong>&ldquo;caution&rdquo;</strong>.</p>
    <Button type="caution">Click me</Button>
  </>
);

export const Disabled = () => (
  <>
    <p style={{ marginBottom: '10px' }}>To disable the button, add the property <strong>type</strong>, with a value <strong>&ldquo;disabled&rdquo;</strong>.</p>
    <Button type="disabled" onClick={action('button clicked')}>Click me</Button>
  </>
);

export const Loading = () => (
  <>
    <p style={{ marginBottom: '10px' }}>If you set the property <strong>loading</strong> to <strong>true</strong>, the button will be disabled and an animated loading icon will be displayed in the right-side of the button&apos;s content.</p>
    <Button loading>Click me</Button>
  </>
);

export const ClickEvent = () => (
  <>
    <p style={{ marginBottom: '10px' }}>To define the button&apos;s click behavior, use the <strong>onClick</strong> event, the same way React suggests.</p>
    <Button onClick={action('button clicked')}>Click me</Button>
  </>
);

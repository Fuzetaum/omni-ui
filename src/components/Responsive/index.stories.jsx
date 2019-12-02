import React from 'react';
import { storiesOf } from '@storybook/react';

import Responsive from './index';

import useWindowSize from '../../useWindowSize';

const ViewportDimensions = () => {
  const [width, height] = useWindowSize();

  return (
    <>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </>
  );
};

// eslint-disable-next-line no-undef
storiesOf('Responsive', module)
  .add('Default', () => (
    <>
      <Responsive>This text should always appear, since no responsive properties were set.</Responsive>
    </>
  ))
  .add('Hide above', () => (
    <>
      <ViewportDimensions />
      <p style={{ marginBottom: '10px' }}>Try resizing this iframe to at most 200 height or 768 width.</p>
      <Responsive hideAboveHeight={200}>This text will only appear when the viewport&apos;s <strong>height</strong> is under 200 pixels.</Responsive>
      <Responsive hideAboveWidth={768}>This text will only appear when the viewport&apos;s <strong>width</strong> is under 768 pixels.</Responsive>
    </>
  ))
  .add('Hide under', () => (
    <>
      <ViewportDimensions />
      <p style={{ marginBottom: '10px' }}>Try resizing this iframe to at least 250 height or 700 width.</p>
      <Responsive hideUnderHeight={250}>This text will only appear when the viewport&apos;s <strong>height</strong> is above 250 pixels.</Responsive>
      <Responsive hideUnderWidth={700}>This text will only appear when the viewport&apos;s <strong>width</strong> is above 700 pixels.</Responsive>
    </>
  ))
  .add('Show between', () => (
    <>
      <ViewportDimensions />
      <p style={{ marginBottom: '10px' }}>Try resizing this iframe between 200 and 300 height, and 700 and 900 width.</p>
      <Responsive hideAboveHeight={300} hideUnderHeight={200}>This text will only appear when the viewport&apos;s <strong>height</strong> is between 200 and 300 pixels.</Responsive>
      <Responsive hideAboveWidth={900} hideUnderWidth={700}>This text will only appear when the viewport&apos;s <strong>width</strong> is between 700 and 900 pixels.</Responsive>
    </>
  ))
;

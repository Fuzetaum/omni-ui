import React from 'react';

import Image from './index';

const imageUrl = 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => (
  <>
    <p style={{ marginBottom: '10px' }}>All the following examples use this <a href={imageUrl} target="_blank" rel="noopener noreferrer" alt="example image">image</a></p>
    <p style={{ marginBottom: '10px' }}>This component displays a placeholder, until the image is fully loaded. Use the <strong>source</strong> property to provide the image&apos;s URL.</p>
    <Image source={imageUrl} style={{ width: '200px', height: 'auto' }} />
  </>
);

import React from 'react';

import Icon from './index';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Default = () => (
  <>
    <p style={{ marginBottom: '10px' }}><strong>Icon</strong>s are used as empty components. You define what icon to be displayed by the <strong>type</strong> property. If that value is not provided or unexpected, nothing will be displayed.</p>
    <p style={{ marginBottom: '10px' }}>All icons have a default size of <strong>1em</strong>.</p>
    <Icon />
  </>
);

export const Loading = () => (
  <>
    <p style={{ marginBottom: '10px' }}>The loading icon is animated. To use it, set the <strong>type</strong> property to <strong>loading</strong></p>
    <Icon type="loading" />
  </>
);

export const LoadingDouble = () => (
  <>
    <p style={{ marginBottom: '10px' }}>The loading-double icon is animated. To use it, set the <strong>type</strong> property to <strong>loading-double</strong></p>
    <Icon type="loading-double" />
  </>
);

export const User = () => (
  <>
    <p style={{ marginBottom: '10px' }}>To use the user icon, set the <strong>type</strong> property to <strong>user</strong></p>
    <Icon type="user" />
  </>
);

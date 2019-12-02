import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import Layout from './index';

// eslint-disable-next-line no-undef
storiesOf('Layout', module)
  .add('Only header', () => (
    <Layout style={{ width: '100%', height: '100vh', margin: '0' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <p>The header will always fill horizontal space, and occupy a predefined 15% of the current container&apos;s width</p>
      </Layout.Header>
      <Layout.Content>
        <p>The content will always fill remaining space, both horizontal and vertical</p>
      </Layout.Content>
    </Layout>
  ))
  .add('Only side menu', () => (
    <Layout style={{ width: '100%', height: '100vh', margin: '0' }}>
      <Layout.SideMenu>
        <p>The side menu always fills the layout&apos;s height, and forces the layout rendering it to a row Flexbox</p>
      </Layout.SideMenu>
      <Layout.Content>
        <p>The content will always fill remaining space, both horizontal and vertical</p>
      </Layout.Content>
    </Layout>
  ))
  .add('With side menu over header', () => (
    <Layout style={{ width: '100%', height: '100vh', margin: '0' }}>
      <Layout.SideMenu>
        <p>The side menu always fills the layout&apos;s height, and forces the layout rendering it to a row Flexbox</p>
      </Layout.SideMenu>
      <Layout>
        <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
          <p>The header will always fill horizontal space, and occupy a predefined 15% of the current container&apos;s width</p>
        </Layout.Header>
        <Layout.Content>
          <p>The content will always fill remaining space, both horizontal and vertical</p>
        </Layout.Content>
      </Layout>
    </Layout>
  ))
  .add('With side menu under header', () => (
    <Layout style={{ width: '100%', height: '100vh', margin: '0' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <p>The header will always fill horizontal space, and occupy a predefined 15% of the current container&apos;s width</p>
      </Layout.Header>
      <Layout>
        <Layout.SideMenu>
          <p>The side menu always fills the layout&apos;s height, and forces the layout rendering it to a row Flexbox</p>
        </Layout.SideMenu>
        <Layout.Content>
          <p>The content will always fill remaining space, both horizontal and vertical</p>
        </Layout.Content>
      </Layout>
    </Layout>
  ))
  .add('With footer only under content', () => (
    <Layout style={{ width: '100%', height: '100vh', margin: '0' }}>
      <Layout.SideMenu>
        <p>The side menu always fills the layout&apos;s height, and forces the layout rendering it to a row Flexbox</p>
      </Layout.SideMenu>
      <Layout>
        <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
          <p>The header will always fill horizontal space, and occupy a predefined 15% of the current container&apos;s width</p>
        </Layout.Header>
        <Layout.Content>
          <p>The content will always fill remaining space, both horizontal and vertical</p>
        </Layout.Content>
        <Layout.Footer>
          <p>The footer always fill horizontal space, and occupy a predefined 15% of the current container&apos;s height</p>
        </Layout.Footer>
      </Layout>
    </Layout>
  ))
  .add('With footer under entire layout', () => (
    <Layout style={{ width: '100%', height: '100vh', margin: '0' }}>
      <Layout.SideMenu>
        <p>The side menu always fills the layout&apos;s height, and forces the layout rendering it to a row Flexbox</p>
      </Layout.SideMenu>
      <Layout>
        <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
          <p>The header will always fill horizontal space, and occupy a predefined 15% of the current container&apos;s width</p>
        </Layout.Header>
        <Layout.Content>
          <p>The content will always fill remaining space, both horizontal and vertical</p>
        </Layout.Content>
      </Layout>
      <Layout.Footer>
        <p>The footer always fill horizontal space, and occupy a predefined 15% of the current container&apos;s height</p>
      </Layout.Footer>
    </Layout>
  ))
  .add('Side menu collapse', () => {
    let [collapsed, setCollapsed] = useState(false);

    return (
      <Layout style={{ width: '100%', height: '100vh', margin: '0' }}>
        <Layout.SideMenu collapsed={collapsed} />
        <Layout>
          <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
          </Layout.Header>
          <Layout.Content>
            <Button onClick={() => setCollapsed(!collapsed)}>Click me to toggle the side menu&apos;s collapsed state</Button>
            <p>To control wether the SideMenu is collapsed or not, use its property <strong>collapsed</strong></p>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  })
;

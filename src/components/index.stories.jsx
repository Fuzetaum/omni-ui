import React from 'react';

import Button from './Button';

import configureOmniUITheme from '../theme';

export default {
  title: 'Theme/ThemeProvider',
  component: configureOmniUITheme,
};

export const Default = () => {
  const changeTheme = (colorBright, colorMedium, colorDark) => configureOmniUITheme({
    primary: {
      bright: colorBright,
      medium: colorMedium,
      dark: colorDark,
    },
  });

  return (
    <>
      <p>The library&apos;s color theme can be changed in JavaScript level, by using the method <strong>configureOmniUITheme</strong>. As a parameter when calling it, pass an object with the color definitions you want to take place.</p>
      <p>The library works with 3 different theme color types: <i>primary</i>, <i>caution</i> and <i>default</i>. For each theme color type, there are 4 properties: the 3 basic colors <i>bright</i>, <i>medium</i> and <i>dark</i>, and the text color <i>text</i>.</p>
      <p>This example uses the following parameter: <i><pre>{`{
primary: {
  bright: <bright-color>,
  medium: <medium-color>,
  dark: <dark-color>
}
}`}</pre></i></p>
      <Button
        style={{
          marginBottom: '1em',
          backgroundColor: 'rgb(232, 134, 14)',
          borderColor: 'rgb(201, 116, 12)',
          color: 'rgb(255, 255, 255)',
        }}
        onClick={() => changeTheme('rgb(232, 134, 14)', 'rgb(201, 116, 12)', 'rgb(176, 102, 11)')}
      >Click to change the theme to this color</Button>
      <Button
        style={{
          marginBottom: '1em',
          backgroundColor: 'rgb(152, 61, 255)',
          borderColor: 'rgb(116, 50, 191)',
          color: 'rgb(255, 255, 255)',
        }}
        onClick={() => changeTheme('rgb(152, 61, 255)', 'rgb(116, 50, 191)', 'rgb(79, 34, 130)')}
      >Reset theme colors</Button>
      <Button type="primary">Primary button</Button>
      <p><strong>Caution: </strong>the library does not update each component automatically. Instead, it changes the values of some variables declared in a separate file, which all components use. So, for changes to take place, ensure that your application will perform a full repaint when a theme color set change!</p>
      <p>The button below will not change its color automatically, but will do so in the first mouse hover, or when you navigate to another Storybook tab and return.</p>
    </>
  );
};

import React, { useState } from 'react';

import { ThemeProvider } from './';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../Button';

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
};

export const Default = () => {
  const { configureOmniUITheme } = useTheme();

  const defaultTheme = {
    bright: 'rgb(152, 61, 255)',
    medium: 'rgb(116, 50, 191)',
    dark: 'rgb(79, 34, 130)',
  };

  const orangeTheme = {
    bright: 'rgb(232, 134, 14)',
    medium: 'rgb(201, 116, 12)',
    dark: 'rgb(176, 102, 11)',
  };

  return (
    <ThemeProvider>
      <p>Use "ThemeProvider" to easily provide colors and styles to all OmniUI components in your app.</p>
      <Button onClick={() => configureOmniUITheme({ primary: orangeTheme })}>Change to me</Button>
      <Button
        style={{
          backgroundColor: 'rgb(152, 61, 255)',
          borderColor: 'rgb(116, 50, 191)',
          color: 'rgb(255, 255, 255)',
        }}
        onClick={() => configureOmniUITheme({ primary: defaultTheme })}
      >Change to me</Button>
    </ThemeProvider>
  );
};

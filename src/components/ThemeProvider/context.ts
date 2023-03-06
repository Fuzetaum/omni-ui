import { createContext } from 'react';

export type ThemeColorDefinitionType = {
  bright?: string,
  medium?: string,
  dark?: string,
  text?: string,
};

export type ThemeDefinitionType = {
  caution?: ThemeColorDefinitionType,
  default?: ThemeColorDefinitionType,
  primary?: ThemeColorDefinitionType,
};

export type ThemeProviderContextType = {
  theme: ThemeDefinitionType,
  configureOmniUITheme: (theme: ThemeDefinitionType) => void,
};

export const THEME_PROVIDER_CONTEXT_DEFAULT_VALUE = {
  theme: {
    caution: {
      bright: 'rgb(255, 133, 133)',
      medium: 'rgb(214, 114, 114)',
      dark: 'rgb(179, 96, 96)',
      text: 'rgb(0, 0, 0)',
    },
    default: {
      bright: 'rgb(255, 255, 255)',
      medium: 'rgb(217, 217, 217)',
      dark: 'rgb(186, 186, 186)',
      text: 'rgb(0, 0, 0)',
    },
    primary: {
      bright: 'rgb(152, 61, 255)',
      medium: 'rgb(116, 50, 191)',
      dark: 'rgb(79, 34, 130)',
      text: 'rgb(250, 250, 250)',
    },
  },
  configureOmniUITheme: () => {},
};

export const ThemeProviderContext = createContext<ThemeProviderContextType>(THEME_PROVIDER_CONTEXT_DEFAULT_VALUE);
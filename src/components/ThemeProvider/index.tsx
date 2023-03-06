import React, {
  useCallback,
  useMemo,
  useState,
  PropsWithChildren,
} from 'react';

import {
  THEME_PROVIDER_CONTEXT_DEFAULT_VALUE,
  ThemeDefinitionType,
  ThemeProviderContext,
  ThemeProviderContextType,
} from './context';

export type ThemeProviderType = {
  theme?: ThemeDefinitionType,
} & PropsWithChildren;

export const ThemeProvider: React.FC<ThemeProviderType> = ({
  theme = {},
  children,
}) => {
  const [currentTheme, setTheme] = useState<ThemeDefinitionType>(THEME_PROVIDER_CONTEXT_DEFAULT_VALUE.theme);

  const configureOmniUITheme = useCallback((newTheme: ThemeDefinitionType) => {
    setTheme(Object.assign<object, ThemeDefinitionType, ThemeDefinitionType, ThemeDefinitionType>({}, THEME_PROVIDER_CONTEXT_DEFAULT_VALUE.theme, currentTheme, newTheme));
  }, [currentTheme]);

  const contextValue: ThemeProviderContextType = useMemo(() => {
    return {
      theme: Object.assign<object, ThemeDefinitionType, ThemeDefinitionType, ThemeDefinitionType>(
        {},
        THEME_PROVIDER_CONTEXT_DEFAULT_VALUE.theme,
        theme,
        currentTheme
      ),
      configureOmniUITheme,
    };
  }, [theme, currentTheme]);

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
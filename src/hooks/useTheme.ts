import { useContext } from 'react';

import { ThemeProviderContext } from '../components/ThemeProvider/context';

export const useTheme = () => useContext(ThemeProviderContext);

export default useTheme;
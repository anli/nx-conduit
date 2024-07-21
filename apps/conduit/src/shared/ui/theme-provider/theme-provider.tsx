import { PaperProvider, ProviderProps } from 'react-native-paper';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useTheme } from './use-theme';

export const ThemeProvider = ({ children, ...rest }: ProviderProps) => {
  const theme = useTheme();

  return (
    <NavigationThemeProvider value={theme}>
      <PaperProvider theme={theme} {...rest}>
        {children}
      </PaperProvider>
    </NavigationThemeProvider>
  );
};

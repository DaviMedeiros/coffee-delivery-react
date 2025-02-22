import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/theme/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

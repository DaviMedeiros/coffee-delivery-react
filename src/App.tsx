import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/theme/global';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

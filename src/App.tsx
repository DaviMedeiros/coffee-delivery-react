import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme/default';
import { GlobalStyle } from '@/styles/theme/global';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Checkout } from '@/pages/Checkout';
import { Success } from '@/pages/Success';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<Success />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

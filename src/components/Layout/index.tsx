import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const Layout = () => {
  return (
    <div style={{ margin: '0 10rem' }}>
      <Header />
      <Outlet />
    </div>
  );
};

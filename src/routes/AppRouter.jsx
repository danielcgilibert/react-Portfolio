import splitbee from '@splitbee/web';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { routes } from './routes';

export const AppRouter = () => {
  useEffect(() => {
    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js'
    });
    splitbee.enableCookie(true);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map(({ to, path, Component, name }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

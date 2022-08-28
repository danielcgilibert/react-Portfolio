import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { routes } from './routes';
export const AppRouter = () => {
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

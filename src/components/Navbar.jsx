import { List } from 'phosphor-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes/routes';
import { ToogleTheme } from './ToogleTheme';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav
        // data-aos="fade-down"
        className=" sticky  top-0 px-8  lg:px-40 py-3 lg:shadow-md   bg-white  dark:bg-black  dark:text-white text-black mb-3">
        <div className=" flex flex-col lg:flex-row lg:justify-between    ">
          <div className="flex justify-between items-center gap-2  ">
            <span className="lg:ml-4 flex justify-center items-center gap-2 ">
              <span className="animate-waving-hand"> 👋 </span> Daniel Carmona
            </span>
            <div className="lg:hidden">
              <List size={28} onClick={() => setNavOpen(!navOpen)} />
            </div>
          </div>

          <div>
            <ul
              className={`lg:flex  lg:gap-5 mt-5 lg:m-0  rounded-2xl shadow-md sm:shadow-none sm:border-none border-t-8 border-gray-300 dark:bg-black  dark:border-none bg-white ${
                navOpen
                  ? 'animate__animated animate__slideInDown flex flex-col justify-center items-center w-52 mx-auto '
                  : 'hidden'
              }    `}>
              {routes.map(
                (route) =>
                  route.showInNavbar && (
                    <li
                      key={route.name}
                      className=" flex justify-center items-center lg:m-0 my-4 text-black ">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? 'dark:bg-white dark:text-black bg-black text-white px-10 py-2  lg:py-3 lg:px-6 rounded-lg'
                            : undefined
                        }
                        to={route.path}>
                        {route.name}
                      </NavLink>
                    </li>
                  )
              )}

              <li className="flex justify-center items-center lg:m-0 my-4 text-black dark:text-white ">
                <ToogleTheme />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

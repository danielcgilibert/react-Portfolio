import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className=" flex flex-col justify-start items-center w-full p-8  ">
      <img
        className="lg:w-72 w-48 rounded-2xl  "
        src="https://c.tenor.com/jNda2l0geyYAAAAd/mem622x.gif"
      />
      <h1 className="font-bold text-2xl text-center my-5 dark:text-white ">
        No se ha encontrado tu página{' '}
      </h1>
      <h1 className="font-bold text-4xl text-center">😔 </h1>

      <button className=' mt-5 flex lg:w-48 justify-center items-center gap-1 bg-gray-200 text-black w-full py-4 text-center rounded-lg shadow-md shadow-slate-300"'>
        <Link className="text-xl" to="/">
          {' '}
          Ir a home{' '}
        </Link>
      </button>
    </div>
  );
};

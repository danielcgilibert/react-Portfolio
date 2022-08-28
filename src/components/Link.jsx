import React from 'react';

export const Link = (props) => {
  return (
    <a
      {...props}
      rel="noopener noreferrer"
      target="_blank"
      className='flex justify-center items-center gap-1 sm:bg-gray-200  text-black sm:w-24 py-2 text-center rounded-lg sm:shadow-md shadow-slate-300"'>
      {props.children}
    </a>
  );
};

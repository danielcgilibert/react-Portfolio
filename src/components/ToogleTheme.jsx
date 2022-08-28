import React, { useEffect, useState } from 'react';
import { BsMoonFill, BsSun } from 'react-icons/bs';

export const ToogleTheme = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [active]);

  return (
    <div onClick={() => setActive(!active)}>
      {active ? (
        <BsMoonFill size={24} className="cursor-pointer" />
      ) : (
        <BsSun size={24} className="cursor-pointer" />
      )}
    </div>
  );
};

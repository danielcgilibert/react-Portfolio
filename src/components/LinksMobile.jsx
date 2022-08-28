import splitbee from '@splitbee/web';
import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from './Link';

export const LinksMobile = () => {
  return (
    <ul className="sm:hidden fixed top-100  right-0 bottom-0 mr-2 mb-1 ">
      <li>
        <Link
          onClick={() => splitbee.track('Github-Mobile')}
          href="https://github.com/danielcgilibert">
          <BsGithub size={24} />
        </Link>
      </li>
      <li>
        <Link
          onClick={() => splitbee.track('Linkedin-Mobile')}
          href="https://www.linkedin.com/in/danielcarmonagilibert/">
          <BsLinkedin size={24} />
        </Link>
      </li>
      <li>
        <Link onClick={() => splitbee.track('CV-Mobile')} href="../assets/cv.pdf" download>
          <BsFillFileEarmarkTextFill size={24} />
        </Link>
      </li>

      <li>
        <Link
          onClick={() => splitbee.track('Email-Mobile')}
          href="mailto:danielcgilibert@gmail.com">
          <AiTwotoneMail size={24} />
        </Link>
      </li>
    </ul>
  );
};

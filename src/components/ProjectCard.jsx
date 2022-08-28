import { AiOutlineLink } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

export const ProjectCard = ({ project }) => {
  const { cover, name, hrefCode, hrefWeb } = project;
  return (
    <a
      className="dark:bg-bgCard  bg-white sm:w-5/12 lg:w-48  lg:h-64  w-full p-4 border    shadow-md rounded-xl"
      href={hrefCode}>
      <div className="flex justify-between items-center">
        <a
          href={hrefWeb && hrefWeb}
          className={`rounded-full px-3 py-1.5 dark:text-black bg-blue-100 text-bue-600 font-medium text-xs ${
            !hrefWeb && 'bg-opacity-40 cursor-not-allowed'
          }`}>
          <AiOutlineLink size={24} className={`${!hrefWeb && 'opacity-10'}`} />
        </a>
        <a
          href={hrefCode}
          className="rounded-full px-3 py-1.5 bg-green-100 dark:text-black text-black font-medium text-xs">
          <BsCodeSlash size={24} />
        </a>
      </div>

      <div className="lg:flex lg:flex-col sm:justify-center  sm:items-center mt-8 lg:mt-2 text-gray-500 sm:pr-0 border-gray-100">
        <h5 className="text-center mt-4 mb-2 text-lg font-bold dark:text-white  text-gray-900">
          {name}
        </h5>
        <img
          className=" w-full h-48 border-none mx-auto  rounded-2xl sm:w-full lg:h-24"
          src={cover}
        />
      </div>
    </a>
  );
};

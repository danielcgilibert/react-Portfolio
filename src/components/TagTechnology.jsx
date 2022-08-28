export const TagTechnology = ({ name = 'html', Icon = null, highlight }) => {
  return (
    <div
      className={`flex justify-center items-center hover:border-b-4 hover:border-gray-300 transition-all delay-75 px-2  text-sm  font-medium subpixel-antialiased uppercase tracking-wide  leading-10 text-center   rounded-lg bg-white text-black border-solid border-2 border-gray-100 ${
        highlight && 'animate-tags-hand'
      }`}>
      {Icon}
      {name}
    </div>
  );
};

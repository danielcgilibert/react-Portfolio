import { tagsTechnology } from '../data/tags';
import { TagTechnology } from './TagTechnology';

export const ListTags = () => {
  return (
    <>
      {tagsTechnology.map(({ name, Icon, highlight }) => (
        <TagTechnology key={name} name={name} Icon={<Icon size={28} />} highlight={highlight} />
      ))}
    </>
  );
};

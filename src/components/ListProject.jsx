import splitbee from '@splitbee/web';
import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const ListProject = () => {
  return (
    <div className="flex flex-col gap-5  lg:flex lg:gap-8 sm:flex-row sm:justify-center sm:flex-wrap lg:justify-center lg:items-center  lg:flex-row lg:flex-wrap  ">
      {projects.map((project) => (
        <ProjectCard
          onClick={() => splitbee.track(project.name)}
          key={project.name}
          project={project}
        />
      ))}
    </div>
  );
};

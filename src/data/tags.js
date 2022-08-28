import {
  DiCss3,
  DiDatabase,
  DiDocker,
  DiGit,
  DiHtml5,
  DiJavascript,
  DiJqueryLogo,
  DiMongodb,
  DiNodejsSmall,
  DiPhp,
  DiReact,
  DiSass,
  DiTerminal,
  DiVisualstudio
} from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';

export const tagsTechnology = [
  { name: 'CSS', Icon: DiCss3, highlight: true },
  { name: 'html', Icon: DiHtml5, highlight: true },
  { name: 'javascript', Icon: DiJavascript, highlight: true },
  { name: 'jquery', Icon: DiJqueryLogo, highlight: false },
  { name: 'sass', Icon: DiSass, highlight: false },
  { name: 'terminal', Icon: DiTerminal, highlight: false },
  { name: 'SQL', Icon: DiDatabase, highlight: false },
  { name: 'Mongo', Icon: DiMongodb, highlight: false },
  { name: 'Git', Icon: DiGit, highlight: false },
  { name: 'NodeJS', Icon: DiNodejsSmall, highlight: false },
  { name: 'PHP', Icon: DiPhp, highlight: false },
  { name: 'Visual Studio code', Icon: DiVisualstudio, highlight: false },

  { name: 'docker', Icon: DiDocker, highlight: true },
  { name: 'React', Icon: DiReact, highlight: true },
  { name: 'NextjS', Icon: TbBrandNextjs, highlight: false }
];

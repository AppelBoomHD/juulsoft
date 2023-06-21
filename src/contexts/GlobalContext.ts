import { createContext } from 'react';
import { ProjectDocument, SkillDocument } from '@/types/prismicio-types';

export const GlobalContext = createContext<{
  projects: ProjectDocument[];
  skills: SkillDocument[];
}>({
  projects: [],
  skills: [],
});

import { createContext } from 'react';
import { ProjectDocument, SkillDocument } from '@/types/prismicio-types';

export type GlobalContextType = {
  projects: ProjectDocument[];
  skills: SkillDocument[];
};

export const GlobalContext = createContext<GlobalContextType>({
  projects: [],
  skills: [],
});

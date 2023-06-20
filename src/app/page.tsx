'use client';

import { createContext } from 'react';
import dynamic from 'next/dynamic';
import { ProjectDocument } from '@/types/prismicio-types';
import { createClient } from '@/utils/prismicio';

import { SkillDocument } from '../types/prismicio-types';

const GlobalCanvas = dynamic(() => import('@/components/canvas/GlobalCanvas'), {
  ssr: false,
});

export const GlobalContext = createContext<{
  projects: ProjectDocument[];
  skills: SkillDocument[];
}>({
  projects: [],
  skills: [],
});

export default async function Home() {
  const client = createClient();
  const projects = await client.getAllByType('project');
  const skills = await client.getAllByType('skill');

  return (
    <GlobalContext.Provider value={{ projects, skills }}>
      <GlobalCanvas />
    </GlobalContext.Provider>
  );
}

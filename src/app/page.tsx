'use client';

import dynamic from 'next/dynamic';
import { GlobalContext } from '@/contexts/GlobalContext';
import { createClient } from '@/utils/prismicio';

const GlobalCanvas = dynamic(() => import('@/components/canvas/GlobalCanvas'), {
  ssr: false,
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

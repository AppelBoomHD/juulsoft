import dynamic from 'next/dynamic';
import { createClient } from '@/utils/prismicio';

const GlobalCanvas = dynamic(() => import('@/components/canvas/GlobalCanvas'), {
  ssr: false,
});

export default async function Home() {
  const client = createClient();
  const projects = await client.getAllByType('project');

  return <GlobalCanvas projects={projects} />;
}

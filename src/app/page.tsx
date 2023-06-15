import dynamic from 'next/dynamic';

const GlobalCanvas = dynamic(() => import('@/components/canvas/GlobalCanvas'), {
  ssr: false,
});

export default function Home() {
  return <GlobalCanvas />;
}

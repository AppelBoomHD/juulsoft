import { useContext, useRef } from 'react';
import { GlobalContext } from '@/contexts/GlobalContext';
import { ProjectDocumentData } from '@/types/prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Projects() {
  const { projects } = useContext(GlobalContext);

  const ref = useRef<any>();
  const scroll = useScroll();
  useFrame(() => {
    ref.current.style.opacity = scroll.curve(1 / 4, 1 / 4, 0.05);
  });

  return (
    <section ref={ref} className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="pb-4 text-6xl font-bold">Projects</h1>
      <h2 className="pb-4 text-2xl font-bold">Check out some projects I&apos;ve worked on!</h2>
      <div className="flex h-1/2 w-full gap-6 p-6">
        {projects.map((project) => (
          <Card project={project.data} key={project.id} />
        ))}
      </div>
    </section>
  );
}

function Card({ project }: { project: ProjectDocumentData }) {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-slate-400 bg-opacity-40 p-4">
      <h2 className="text-xl ">{project.title}</h2>
      <p>
        <PrismicRichText field={project.description} />{' '}
      </p>
      <div className="flex justify-between">
        {project.url && (
          <a href={project.url} target="_blank" rel="noreferrer">
            URL
          </a>
        )}
        {project.github && (
          <a href={`https://github.com/${project.github}`} target="_blank" rel="noreferrer">
            Github
          </a>
        )}
      </div>
    </div>
  );
}

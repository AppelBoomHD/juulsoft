import { useContext, useRef, useState } from 'react';
import { GlobalContext } from '@/contexts/GlobalContext';
import { ProjectDocumentData } from '@/types/prismicio-types';
import { KeyTextField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { animated, config, useSpring } from '@react-spring/web';
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
  const [hovered, setHovered] = useState(false);
  const { marginX } = useSpring({
    marginX: hovered ? -24 : 0,
    config: config.wobbly,
  });

  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-slate-400 bg-opacity-40 p-4 ring-2 ring-white">
      <div className="space-y-4">
        <div>
          <h2 className="text mb-2 text-xl">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            {project.slices[0]?.items.map((item, index) => (
              <Tag tag={item.tag} key={index} />
            ))}
          </div>
        </div>
        <animated.div
          style={{
            marginLeft: marginX,
            marginRight: marginX,
          }}
        >
          <PrismicNextImage
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="h-1/2 rounded-lg shadow-lg shadow-gray-600 ring-1 ring-black"
            field={project.image}
          />
        </animated.div>
        <PrismicRichText field={project.description} />
      </div>
      <div className="flex justify-between">
        {project.github && (
          <a
            className="rounded-lg bg-deepPurple px-2 py-1 text-white ring-2 ring-black"
            href={`https://github.com/${project.github}`}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        )}
        {project.url && (
          <a
            className="ml-auto rounded-lg bg-lightPurple px-2 py-1 text-white ring-2 ring-black"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            URL
          </a>
        )}
      </div>
    </div>
  );
}

function Tag({ tag, key }: { tag: KeyTextField; key: number }) {
  const [hovered, setHovered] = useState(false);
  const { paddingX, paddingY } = useSpring({
    paddingX: hovered ? 12 : 8,
    paddingY: hovered ? 6 : 4,
    config: config.wobbly,
  });

  return (
    <animated.span
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-lg bg-orange text-xs ring-2 ring-black"
      key={key}
    >
      {tag}
    </animated.span>
  );
}

import { useContext, useRef, useState } from 'react';
import SliderButtons from '@/components/dom/SliderButtons';
import { GlobalContext } from '@/contexts/GlobalContext';
import { ProjectDocumentData } from '@/types/prismicio-types';
import { KeyTextField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { animated, config, useSpring } from '@react-spring/web';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';

export default function Projects() {
  const { projects } = useContext(GlobalContext);

  const ref = useRef<HTMLElement>(null);
  const scroll = useScroll();
  const swiper = useSwiper();
  useFrame(() => {
    ref.current!.style.opacity = scroll.curve(1 / 4, 1 / 4, 0.05).toString();
  });

  return (
    <section ref={ref} className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="pb-4 text-2xl font-bold md:text-3xl lg:text-6xl">Projects</h1>
      <h2 className="pb-4 text-lg font-bold md:text-xl lg:text-2xl">
        Check out some projects I&apos;ve worked on!
      </h2>
      <div className="w-full">
        <Swiper
          centeredSlides
          slidesPerView={'auto'}
          initialSlide={projects.length / 2}
          slideToClickedSlide
        >
          {projects.map((project) => (
            <SwiperSlide className="!w-80" key={project.id}>
              <Card project={project.data} />
            </SwiperSlide>
          ))}
          <SliderButtons />
        </Swiper>
      </div>
    </section>
  );
}

function Card({ project }: { project: ProjectDocumentData }) {
  const [hovered, setHovered] = useState(false);
  const { transform } = useSpring({
    transform: hovered ? 'scale(1.3)' : 'scale(1)',
    config: config.wobbly,
  });

  return (
    <div className="h-full rounded-xl bg-white p-1">
      <div className="flex flex-col justify-between rounded-lg bg-slate-400 p-4">
        <div className="mb-4 space-y-4">
          <div>
            <h2 className="mb-2 text-lg md:text-xl">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.slices[0]?.items.map((item, index) => (
                <Tag tag={item.tag} key={index} />
              ))}
            </div>
          </div>
          <animated.div
            style={{
              transform,
            }}
            className="flex h-40 justify-center sm:h-52"
          >
            <PrismicNextImage
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-auto rounded-lg shadow-lg shadow-gray-600 ring-1 ring-black"
              field={project.image}
            />
          </animated.div>
          <div className="h-[2.5rem] text-sm sm:h-[4.5rem] sm:text-base">
            <PrismicRichText field={project.description} />
          </div>
        </div>
        <div className="flex justify-between text-sm text-white sm:text-base">
          {project.github && (
            <a
              className="rounded-lg bg-deepPurple px-2 py-1 ring-2 ring-black"
              href={`https://github.com/${project.github}`}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          )}
          {project.url && (
            <a
              className="ml-auto rounded-lg bg-lightPurple px-2 py-1 ring-2 ring-black"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              URL
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Tag({ tag }: { tag: KeyTextField }) {
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
    >
      {tag}
    </animated.span>
  );
}

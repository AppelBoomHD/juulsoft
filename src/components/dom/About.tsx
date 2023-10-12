import { useContext, useRef } from 'react';
import { GlobalContext } from '@/contexts/GlobalContext';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { SkillDocument } from '../../types/prismicio-types';
import Tag from './Tag';

export default function About() {
  const { skills } = useContext(GlobalContext);
  const ref = useRef<HTMLElement>(null);
  const scroll = useScroll();
  useFrame(() => {
    ref.current!.style.opacity = scroll.curve(1 / 4, 1 / 4, 0.05).toString();
  });

  // map over skills array and group by skill type (frontend, backend, etc)
  const mappedSkills = skills.reduce<Map<string, SkillDocument[]>>((acc, skill) => {
    // Check if the type already exists in the Map
    if (acc.has(skill.data.type)) {
      // Add the skill to the existing type
      acc.get(skill.data.type)!.push(skill);
    } else {
      // Create a new type and add the skill
      acc.set(skill.data.type, [skill]);
    }
    return acc;
  }, new Map());

  return (
    <section ref={ref} className="flex h-full flex-col items-center justify-center">
      <h1 className="pb-4 text-3xl font-bold lg:text-6xl">About me</h1>
      {/* <h2 className="pb-4 text-xl font-bold lg:text-2xl">
        Skills I&apos;ve built up through the years
      </h2> */}
      <div className="flex w-3/4 flex-col gap-1 sm:flex-row sm:gap-6">
        <div className="w-full rounded-lg border-4 border-white bg-slate-400 p-4 dark:bg-gray-700">
          Hi, my name is Julian Riemersma. I&apos;m a fullstack developer from The Netherlands that
          loves to create digital experiences that users love.
        </div>
        <div className="flex min-h-[50%] w-full flex-col gap-1 sm:gap-6">
          {Array.from(mappedSkills.keys()).map((type) => (
            <Card type={type} skills={mappedSkills.get(type)!} key={type} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ type, skills }: { type: string; skills: SkillDocument[] }) {
  return (
    <div className="rounded-lg border-4 border-white bg-slate-400 p-4 dark:bg-gray-700">
      <h3 className="mb-2 text-lg md:text-xl">Skills - {type}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Tag tag={skill.data.name} key={skill.id} />
        ))}
      </div>
    </div>
  );
}

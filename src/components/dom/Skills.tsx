import { useContext, useRef } from 'react';
import { GlobalContext } from '@/contexts/GlobalContext';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { SkillDocument, SkillDocumentData } from '../../types/prismicio-types';

export default function Skills() {
  const { skills } = useContext(GlobalContext);
  const ref = useRef<any>();
  const scroll = useScroll();
  useFrame(() => {
    ref.current.style.opacity = scroll.curve(1 / 2, 1 / 4, 0.05);
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
      <h1 className="pb-4 text-3xl font-bold lg:text-6xl">Skills</h1>
      <h2 className="pb-4 text-xl font-bold lg:text-2xl">
        Skills I&apos;ve built up through the years
      </h2>
      <div className="flex min-h-[50%] w-full flex-col gap-6 p-6 sm:flex-row">
        {Array.from(mappedSkills.keys()).map((type) => (
          <Card type={type} skills={mappedSkills.get(type)!} key={type} />
        ))}
      </div>
    </section>
  );
}

function Card({ type, skills }: { type: string; skills: SkillDocument[] }) {
  return (
    <div className="w-full rounded-lg bg-slate-400 bg-opacity-40 p-4 ring-2 ring-white">
      <h3 className="mb-2 text-xl">{type}</h3>
      <div className="flex flex-col justify-center">
        {skills.map((skill) => (
          <Skill skill={skill.data} key={skill.id} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }: { skill: SkillDocumentData }) {
  return (
    <div className="px-4">
      <h4 className="text-l mb-1 mt-4">{skill.name}</h4>
      <div className="ml-4 h-4 rounded-full bg-slate-900 ring-2 ring-black">
        <div
          className="h-full rounded-full bg-gradient-to-r from-deepPurple via-orange to-lightPurple transition-all"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );
}

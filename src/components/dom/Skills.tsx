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
    <section ref={ref} className="flex h-screen w-full  flex-col items-center justify-center">
      <h1 className="pb-4 text-6xl font-bold">Skills</h1>
      <h2 className="pb-4 text-2xl font-bold">Skills I&apos;ve built up through the years</h2>
      <div className="flex min-h-[50%] w-full gap-6 p-6">
        {Array.from(mappedSkills.keys()).map((type) => (
          <Card type={type} skills={mappedSkills.get(type)!} key={type} />
        ))}
      </div>
    </section>
  );
}

function Card({ type, skills }: { type: string; skills: SkillDocument[] }) {
  return (
    <div className="w-full rounded-lg bg-slate-400 bg-opacity-40 p-4">
      <h3 className="text-xl">{type}</h3>
      {skills.map((skill) => (
        <Skill skill={skill.data} key={skill.id} />
      ))}
    </div>
  );
}

function Skill({ skill }: { skill: SkillDocumentData }) {
  return (
    <div className="flex justify-between px-4">
      <h4 className="text-l ">{skill.name}</h4>
      <div className="h-4 w-1/4 rounded-full bg-white ">
        <div
          className="h-full rounded-full bg-gradient-to-r from-deepPurple via-orange to-lightPurple transition-all"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );
}

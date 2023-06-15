import { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Projects() {
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
        <Card
          title="Chess-Phaser"
          description="Chess app, built with Phaser using Object-Oriented Programming"
          url="https://chess.juulsoft.com"
          github="AppelBoomHD/Chess-phaser"
          image=""
        />
        <Card
          title="Flixer"
          description="iOS app that lets you find a movie or series to watch with your friend or partner"
          github="AppelBoomHD/Flixer"
          image=""
        />
        <Card
          title="MakePlans"
          description="iOS app that helps you make plans with friends"
          github="AppelBoomHD/MakePlans"
          image=""
        />
        <Card
          title="Svenskahus"
          description="Vacation home booking website"
          url="https://svenskahus.nl"
          image=""
        />
      </div>
    </section>
  );
}

function Card(props: {
  title: string;
  description: string;
  url?: string;
  github?: string;
  image: string;
}) {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-slate-400 bg-opacity-40 p-4">
      <h2 className="text-xl ">{props.title}</h2>
      <p>{props.description}</p>
      <div className="flex justify-between">
        {props.url && (
          <a href={props.url} target="_blank" rel="noreferrer">
            URL
          </a>
        )}
        {props.github && (
          <a href={`https://github.com/${props.github}`} target="_blank" rel="noreferrer">
            Github
          </a>
        )}
      </div>
    </div>
  );
}

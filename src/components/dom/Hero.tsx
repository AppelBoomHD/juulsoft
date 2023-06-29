import { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Mouse from './Mouse';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const scroll = useScroll();

  useFrame(() => {
    ref.current!.style.opacity = (1 - scroll.range(0, 1 / 8)).toString();
  });

  return (
    <section ref={ref} className="h-full">
      <p className="text-md absolute left-1/2 top-3/4 -translate-x-1/2 text-center font-bold sm:text-2xl">
        Hi, I&apos;m Julian Riemersma, Fullstack developer
      </p>
      <Mouse />
    </section>
  );
}

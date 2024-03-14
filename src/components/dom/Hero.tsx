import { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';

import Mouse from './Mouse';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const scroll = useScroll();

  useFrame(() => {
    ref.current!.style.opacity = (1 - scroll.range(0, 1 / 8)).toString();
  });

  return (
    <section ref={ref} className="h-full">
      <p className="absolute left-1/2 top-3/4 -translate-x-1/2 text-center font-nunito text-lg font-bold sm:text-3xl">
        <Typewriter
          options={{}}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString(`Hi, I'm Julian Riemersma, Fullstack developer`)
              .start();
          }}
        />
      </p>
      <Mouse />
    </section>
  );
}

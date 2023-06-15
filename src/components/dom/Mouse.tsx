import { useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Mouse() {
  const { y } = useSpring({
    from: {
      y: '-100%',
    },
    to: {
      y: '50%',
    },
    loop: { reverse: true, delay: 750 },
    config: { tension: 200, friction: 12, duration: 300 },
  });

  const ref = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    ref.current.style.opacity = 1 - scroll.range(0, 1 / 8);
  });

  return (
    <div className="flex h-screen w-full items-end justify-center pb-4">
      <div
        ref={ref}
        className="rounded-lg px-1.5 py-4 ring-2 ring-gray-900 ring-opacity-75 dark:ring-gray-300"
      >
        <animated.div style={{ y }} className="rounded-full bg-gray-900 p-1 dark:bg-gray-300 " />
      </div>
    </div>
  );
}

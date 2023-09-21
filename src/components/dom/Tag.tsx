import { useState } from 'react';
import { KeyTextField } from '@prismicio/client';
import { animated, config, useSpring } from '@react-spring/web';

export default function Tag({ tag }: { tag: KeyTextField }) {
  const [hovered, setHovered] = useState(false);
  const { transform } = useSpring({
    transform: hovered ? 'scale(1.2)' : 'scale(1)',
    config: config.wobbly,
  });

  return (
    <animated.span
      style={{
        transform,
      }}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-lg bg-orange px-2 py-1 text-xs ring-2 ring-black"
    >
      {tag}
    </animated.span>
  );
}

import { animated, useSpring } from '@react-spring/web';

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

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <div className="rounded-lg px-1.5 py-4 ring-2 ring-gray-900 ring-opacity-75 dark:ring-gray-300">
        <animated.div style={{ y }} className="rounded-full bg-gray-900 p-1 dark:bg-gray-300 " />
      </div>
    </div>
  );
}

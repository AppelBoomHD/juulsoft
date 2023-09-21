import { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const scroll = useScroll();
  useFrame(() => {
    ref.current!.style.opacity = scroll.range(3 / 4, 1 / 4).toString();
  });

  return (
    <section ref={ref} className="flex h-full flex-col items-center justify-center ">
      <h1 className="pb-4 text-3xl font-bold lg:text-6xl">Contact</h1>
      <h2 className="pb-4 text-xl font-bold lg:text-2xl">Keep in touch!</h2>
      <div className="flex h-1/2 min-w-[50%] gap-6 p-6">
        <div className="flex w-full flex-col rounded-lg border-4 border-white bg-slate-400 p-4 dark:bg-gray-700">
          <div className="flex flex-col">
            <span>
              E-mail: <a href="mailto:info@juulsoft.com">info@juulsoft.com</a>
            </span>
            <span>
              Github: <a href="https://github.com/AppelBoomHD">AppelBoomHD</a>
            </span>
            <span>
              Linkedin: <a href="https://linkedin.com/in/julianriemersma">/in/julianriemersma</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

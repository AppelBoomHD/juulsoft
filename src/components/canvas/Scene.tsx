import { Suspense, useState } from 'react';
import { DarkModeToggle } from '@/components/canvas/DarkModeToggle';
import Logo from '@/components/canvas/Logo';
import About from '@/components/dom/About';
import Contact from '@/components/dom/Contact';
import Hero from '@/components/dom/Hero';
import Projects from '@/components/dom/Projects';
import { GlobalContext, GlobalContextType } from '@/contexts/GlobalContext';
import { Scroll, ScrollControls, Stars } from '@react-three/drei';

export default function Scene(props: GlobalContextType) {
  const [section, setSection] = useState(0);

  return (
    <ScrollControls pages={4} damping={0}>
      <hemisphereLight name="Default Ambient Light" intensity={1} color="#FFFFFF" />
      <DarkModeToggle />
      <Scroll>
        {/* <ScrollManager section={section} onSectionChange={setSection} /> */}
        <group position={[0, -60, -10]}>
          <Stars factor={2} radius={30} />
        </group>
        <Suspense fallback={null}>
          <Logo scale={[0.005, 0.005, 0.0025]} position={[-6.75, 0, 0]} />
        </Suspense>
      </Scroll>
      <Scroll html>
        <GlobalContext.Provider value={props}>
          <div className="h-[100svh] w-screen">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </GlobalContext.Provider>
      </Scroll>
    </ScrollControls>
  );
}

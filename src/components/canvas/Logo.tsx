/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { animated, config, useSpring } from '@react-spring/three';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { BufferGeometry, Group } from 'three';

export default function Logo(props: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  const { width } = useThree((state) => state.size);
  const scroll = useScroll();
  const [hovered, setHovered] = React.useState(false);
  const [hoveredLogo, setHoveredLogo] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const ref = useRef<Group>(null);

  const { rotation, scale } = useSpring({
    rotation: hoveredLogo
      ? clicked
        ? [0, Math.PI, Math.PI / 2]
        : [0, 0, Math.PI / 2]
      : clicked
      ? [0, Math.PI, 0]
      : [0, 0, 0],
    scale: hoveredLogo ? 1.25 : 1,
    config: config.wobbly,
  });
  //@ts-ignore
  const { nodes, materials } = useGLTF('/models/logo.glb');

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    ref.current!.rotation.y = scroll.range(0, 1 / 4) * 5;
    ref.current!.position.x =
      (1 - scroll.range(0, 1 / 10)) * props.position[0] * (width > 640 ? 1 : 0.75);

    const offset = scroll.offset * 5;
    ref.current!.scale.x = (1 + offset) * props.scale[0] * (width > 640 ? 1 : 0.75);
    ref.current!.scale.y = (1 + offset) * props.scale[1] * (width > 640 ? 1 : 0.75);
    ref.current!.scale.z = (1 + offset) * props.scale[2] * (width > 640 ? 1 : 0.75);
  });

  return (
    <group
      {...props}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <animated.group
        name="Logo"
        //@ts-ignore
        rotation={rotation}
        scale={scale}
        onPointerOver={() => setHoveredLogo(true)}
        onPointerOut={() => setHoveredLogo(false)}
        onClick={() => setClicked((isClicked) => !isClicked)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.orange}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.lightPurple}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle.geometry}
          material={materials.deepPurple}
          position={[252, 252, -504]}
        />
      </animated.group>
      <animated.group>
        <Letter
          geometry={nodes.f.geometry}
          material={materials.lightPurple}
          position={[2717.6, 4, -252]}
        />
        <Letter
          geometry={nodes.l.geometry}
          material={materials.lightPurple}
          position={[1618, -2, -252]}
        />
        <Letter
          geometry={nodes.o.geometry}
          material={materials.lightPurple}
          position={[2344.4, -84.4, -252]}
        />
        <Letter
          geometry={nodes.s.geometry}
          material={materials.lightPurple}
          position={[1920, -84.4, -252]}
        />
        <Letter
          geometry={nodes.t.geometry}
          material={materials.lightPurple}
          position={[3020, -30, -252]}
        />
        <Letter
          geometry={nodes.u.geometry}
          material={materials.lightPurple}
          position={[772.4, -88.4, -252]}
        />
        <Letter
          geometry={nodes.u_2.geometry}
          material={materials.lightPurple}
          position={[1235.6, -88.4, -252]}
        />
      </animated.group>
    </group>
  );
}

function Letter(props: {
  position: [number, number, number];
  geometry: BufferGeometry;
  material: any;
}) {
  const [hovered, setHovered] = React.useState(false);
  const { scale, position } = useSpring({
    scale: hovered ? 1.15 : 1,
    position: hovered
      ? [props.position[0] + 300, props.position[1], props.position[2]]
      : props.position,
    config: { duration: 400, ...config.wobbly },
  });
  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={props.geometry}
      material={props.material}
      //@ts-ignore
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

useGLTF.preload('/models/logo.glb');

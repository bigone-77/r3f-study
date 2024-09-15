import { SpotLight, useHelper } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Lights = () => {
  // lightRef의 타입을 THREE.DirectionalLight로 명시
  // const pointRef = useRef<THREE.PointLight>(
  //   null as unknown as THREE.PointLight,
  // );

  // useHelper(pointRef, THREE.PointLightHelper, 3, 0xffff00);

  // const lightRef = useRef<THREE.HemisphereLight>(
  //   null as unknown as THREE.HemisphereLight,
  // );

  // useHelper(lightRef, THREE.HemisphereLightHelper, 1, 0xffffff);

  // const lightRef = useRef<THREE.HemisphereLight>(
  //   null as unknown as THREE.HemisphereLight,
  // );

  // useHelper(lightRef, THREE.HemisphereLightHelper, 1, 0xffffff);
  const lightRef = useRef(null);
  const targetRef = useRef(null);
  const [target, setTarget] = useState();

  useHelper(lightRef, THREE.SpotLightHelper, 1, 0xffffff);

  useEffect(() => {
    if (targetRef.current) {
      setTarget(targetRef.current);
    }
  }, []);

  return (
    <>
      {/* <directionalLight
        ref={lightRef}
        castShadow
        args={[0xffffff, 5]}
        position={[4, 4, 4]}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      /> */}
      {/* <pointLight
        ref={pointRef}
        args={[0xffffff, 10, 10, 1]}
        position-y={2}
        castShadow
      /> */}
      {/* <hemisphereLight
        ref={lightRef}
        args={[0x0000ff, 0xf00ff0, 5]}
        position-y={2}
      /> */}
      <SpotLight
        color={0xffffff}
        intensity={10}
        distance={100}
        angle={Math.PI / 4}
        penumbra={1}
        decay={0.5}
        anglePower={100}
        attenuation={5}
        radiusTop={1}
        radiusBottom={10}
        opacity={1}
        volumetric
        debug
        position={[3, 3, 3]}
        target={target}
      />
    </>
  );
};

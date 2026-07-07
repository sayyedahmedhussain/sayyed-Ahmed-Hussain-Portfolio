import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/**
 * A single glowing, slowly-distorting sphere used to suggest a
 * "hologram" floating in the galaxy field.
 */
function GlowOrb({ position, color, scale = 1, speed = 1 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t) * 0.4;
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.y = t * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.15}
        metalness={0.6}
        distort={0.35}
        speed={1.4}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

/** Slow-drifting nebula of tiny points behind the stars. */
function NebulaDust({ count = 700 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4;
    }
    return arr;
  }, [count]);

  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#915eff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Rig that gently rotates the whole scene toward the mouse (parallax). */
function MouseParallaxRig({ mouse, children }) {
  const group = useRef();
  useFrame(() => {
    if (!group.current) return;
    const targetX = mouse.current.y * 0.15;
    const targetY = mouse.current.x * 0.25;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.04);
  });
  return <group ref={group}>{children}</group>;
}

function CameraRig({ mouse }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.6, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -mouse.current.y * 0.4, 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene({ reduceEffects = false }) {
  const mouse = useRef({ x: 0, y: 0 });

  function handlePointerMove(e) {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
  }

  return (
    <div className="absolute inset-0" onPointerMove={handlePointerMove} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, reduceEffects ? 1.25 : 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00f5ff" />
        <pointLight position={[-5, -3, -5]} intensity={1} color="#915eff" />

        <CameraRig mouse={mouse} />

        <MouseParallaxRig mouse={mouse}>
          <Stars radius={60} depth={40} count={reduceEffects ? 1800 : 4500} factor={3} fade speed={0.6} />
          <NebulaDust count={reduceEffects ? 300 : 700} />
          {!reduceEffects && <Sparkles count={60} scale={12} size={3} speed={0.3} color="#00f5ff" />}

          <GlowOrb position={[-3.2, 0.8, -2]} color="#915eff" scale={1.1} speed={0.6} />
          <GlowOrb position={[3.4, -0.6, -3]} color="#00f5ff" scale={0.8} speed={0.8} />
          {!reduceEffects && <GlowOrb position={[0.6, 1.6, -5]} color="#b494ff" scale={0.5} speed={1.1} />}
        </MouseParallaxRig>

        {!reduceEffects && (
          <EffectComposer>
            <Bloom intensity={0.9} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
}

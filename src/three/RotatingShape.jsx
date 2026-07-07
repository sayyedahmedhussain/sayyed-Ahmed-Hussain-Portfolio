import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

function Knot() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.25;
      ref.current.rotation.y += delta * 0.35;
    }
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.32, 180, 24]} />
      <MeshDistortMaterial
        color="#915eff"
        emissive="#00f5ff"
        emissiveIntensity={0.25}
        roughness={0.2}
        metalness={0.7}
        distort={0.2}
        speed={1.2}
      />
    </mesh>
  );
}

export default function RotatingShape({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.75]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={1.4} color="#00f5ff" />
        <pointLight position={[-3, -2, -2]} intensity={1} color="#915eff" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
            <Knot />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

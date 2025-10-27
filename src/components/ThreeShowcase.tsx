import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

const CodeBrackets = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Left bracket */}
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#00D9FF" metalness={0.8} roughness={0.2} emissive="#00D9FF" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.7, 0.8, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.2]} />
        <meshStandardMaterial color="#00D9FF" metalness={0.8} roughness={0.2} emissive="#00D9FF" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.7, -0.8, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.2]} />
        <meshStandardMaterial color="#00D9FF" metalness={0.8} roughness={0.2} emissive="#00D9FF" emissiveIntensity={0.3} />
      </mesh>
      {/* Right bracket */}
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#00D9FF" metalness={0.8} roughness={0.2} emissive="#00D9FF" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.7, 0.8, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.2]} />
        <meshStandardMaterial color="#00D9FF" metalness={0.8} roughness={0.2} emissive="#00D9FF" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.7, -0.8, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.2]} />
        <meshStandardMaterial color="#00D9FF" metalness={0.8} roughness={0.2} emissive="#00D9FF" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

const Laptop = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Screen */}
      <mesh position={[0, 0.5, -0.05]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[2, 1.3, 0.1]} />
        <meshStandardMaterial color="#0A1628" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Screen display */}
      <mesh position={[0, 0.5, 0.01]} rotation={[0.1, 0, 0]}>
        <planeGeometry args={[1.8, 1.1]} />
        <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.5} />
      </mesh>
      {/* Keyboard base */}
      <mesh position={[0, 0, 0]} rotation={[-0.05, 0, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

const CloudShape = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#0099FF" metalness={0.6} roughness={0.3} emissive="#0099FF" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-0.4, 0, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#0099FF" metalness={0.6} roughness={0.3} emissive="#0099FF" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.4, 0, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#0099FF" metalness={0.6} roughness={0.3} emissive="#0099FF" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#0099FF" metalness={0.6} roughness={0.3} emissive="#0099FF" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};

const ThreeShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="showcase">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Interactive 3D Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our capabilities through interactive 3D demonstrations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[500px] rounded-2xl overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm"
        >
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <pointLight position={[-10, -10, -5]} intensity={0.8} color="#00D9FF" />
            <pointLight position={[5, 5, 5]} intensity={0.6} color="#00FFFF" />
            
            <Laptop position={[-3, 0, 0]} />
            <CodeBrackets position={[0, 0.5, 0]} />
            <CloudShape position={[3, -0.5, 0]} />
            
            <OrbitControls 
              enableZoom={true} 
              autoRotate 
              autoRotateSpeed={0.8} 
              minDistance={5} 
              maxDistance={15}
            />
          </Canvas>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-8"
        >
          Click and drag to rotate • Scroll to zoom
        </motion.p>
      </div>
    </section>
  );
};

export default ThreeShowcase;

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Center } from '@react-three/drei';
import * as THREE from 'three';
import type { DesignState } from '../types/design';
import { RefreshCw, Play, Pause, ZoomIn, ZoomOut } from 'lucide-react';

interface Props {
  design: DesignState;
}

const BottleModel = ({ design, autoRotate }: { design: DesignState, autoRotate: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    if (design.logo) {
      new THREE.TextureLoader().load(design.logo, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        
        if (design.orientation === 'horizontal') {
          tex.repeat.set(1, 1);
        } else {
          tex.repeat.set(2, 1); // Repeat to make the portrait image cover the front half
          tex.offset.set(0.5, 0);
        }
        
        setTexture(tex);
      });
    } else {
      setTexture(null);
    }
  }, [design.logo, design.orientation]);

  useFrame((_state, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.5; // ~12 seconds per revolution
    }
  });

  // Bottle parameters
  const bodyRadius = 1.2;
  const bodyHeight = 4.5;
  const shoulderHeight = 1.2;
  const neckRadius = 0.4;
  const neckHeight = 0.8;
  const capRadius = 0.45;
  const capHeight = 0.5;

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#e0f2fe', // Light blue tint
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.9, // glass effect
    thickness: 0.5,
    envMapIntensity: 1.5,
    clearcoat: 1,
    transparent: true,
  });

  const capMaterial = new THREE.MeshStandardMaterial({
    color: '#0B1F3A', // Brand Navy
    metalness: 0.3,
    roughness: 0.4,
  });

  const labelMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    map: texture || null,
    transparent: true,
    opacity: texture ? 1 : 0,
    metalness: 0.1,
    roughness: 0.5,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });

  // If there is no uploaded logo but there is a brand name (from initial state), we could draw it on a canvas
  // For simplicity, we just use the texture if available.

  return (
    <group ref={group} dispose={null} position={[0, -3, 0]}>
      {/* Bottle Body */}
      <mesh material={glassMaterial} position={[0, bodyHeight / 2, 0]}>
        <cylinderGeometry args={[bodyRadius, bodyRadius, bodyHeight, 32]} />
      </mesh>

      {/* Label Wrapper (Slightly larger cylinder to avoid z-fighting) */}
      <mesh material={labelMaterial} position={[0, bodyHeight / 2, 0]}>
        <cylinderGeometry args={[bodyRadius + 0.01, bodyRadius + 0.01, bodyHeight - 0.5, 32]} />
      </mesh>

      {/* Shoulder */}
      <mesh material={glassMaterial} position={[0, bodyHeight + shoulderHeight / 2, 0]}>
        <cylinderGeometry args={[neckRadius, bodyRadius, shoulderHeight, 32]} />
      </mesh>

      {/* Neck */}
      <mesh material={glassMaterial} position={[0, bodyHeight + shoulderHeight + neckHeight / 2, 0]}>
        <cylinderGeometry args={[neckRadius, neckRadius, neckHeight, 32]} />
      </mesh>

      {/* Cap */}
      <mesh material={capMaterial} position={[0, bodyHeight + shoulderHeight + neckHeight + capHeight / 2, 0]}>
        <cylinderGeometry args={[capRadius, capRadius, capHeight, 32]} />
      </mesh>
    </group>
  );
};

export default function Bottle3DViewer({ design }: Props) {
  const [autoRotate, setAutoRotate] = useState(false);
  const controlsRef = useRef<any>(null);

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const zoomIn = () => {
    if (controlsRef.current) {
      const currentZoom = controlsRef.current.target.distanceTo(controlsRef.current.object.position);
      controlsRef.current.object.position.setZ(Math.max(5, currentZoom - 1));
    }
  };

  const zoomOut = () => {
    if (controlsRef.current) {
      const currentZoom = controlsRef.current.target.distanceTo(controlsRef.current.object.position);
      controlsRef.current.object.position.setZ(Math.min(15, currentZoom + 1));
    }
  };

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] bg-gradient-to-b from-brand-softBg to-white rounded-2xl overflow-hidden group">
      
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-blue/20 flex items-center gap-2 shadow-sm">
        <RefreshCw className="w-4 h-4 text-brand-blue" />
        <span className="text-sm font-bold text-brand-navy">360° Interactive Preview</span>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-active:opacity-0">
        <div className="bg-brand-navy/80 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium flex items-center gap-2 shadow-xl animate-pulse">
          <span className="hidden md:inline">Drag to rotate</span>
          <span className="inline md:hidden">Swipe to rotate</span>
        </div>
      </div>

      <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }} gl={{ preserveDrawingBuffer: true }} id="bottle-3d-canvas">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        <Environment preset="city" />
        
        <Center>
          <BottleModel design={design} autoRotate={autoRotate} />
        </Center>
        
        <ContactShadows position={[0, -3.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        
        <OrbitControls 
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 2 - 0.2} // Restrict vertical rotation strictly
          maxPolarAngle={Math.PI / 2 + 0.2} 
        />
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-gray-100 z-10">
        <button 
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-xl transition-colors ${autoRotate ? 'bg-brand-blue text-white' : 'hover:bg-gray-100 text-gray-700'}`}
          aria-label="Toggle auto rotation"
          title={autoRotate ? "Pause rotation" : "Auto rotate"}
        >
          {autoRotate ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        
        <div className="w-px h-6 bg-gray-200 mx-1"></div>
        
        <button 
          onClick={resetView}
          className="p-2 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors"
          aria-label="Reset bottle view"
          title="Reset View"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
        
        <div className="w-px h-6 bg-gray-200 mx-1"></div>

        <button 
          onClick={zoomIn}
          className="p-2 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors"
          aria-label="Zoom In"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button 
          onClick={zoomOut}
          className="p-2 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors"
          aria-label="Zoom Out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

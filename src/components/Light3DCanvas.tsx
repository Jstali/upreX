import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Light3DCanvasProps {
  className?: string;
  shape?: 'torus' | 'crystal' | 'sphere';
}

export const Light3DCanvas: React.FC<Light3DCanvasProps> = ({
  className = '',
  shape = 'torus',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeShape, setActiveShape] = useState<'torus' | 'crystal' | 'sphere'>(shape);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    // 3. Renderer with high-DPI & clean transparent alpha
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    // 4. Lighting Rig (Soft Ethereal Lighting for Light Mode)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Key Light (Cyan)
    const keyLight = new THREE.DirectionalLight(0x00f2fe, 3.2);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);

    // Rim Light (Hot Pink / Violet)
    const rimLight = new THREE.DirectionalLight(0xec4899, 2.5);
    rimLight.position.set(-6, -6, -4);
    scene.add(rimLight);

    // Soft Top Fill Light (Warm Champagne)
    const fillLight = new THREE.PointLight(0xfff1e6, 2.0, 50);
    fillLight.position.set(0, 5, 4);
    scene.add(fillLight);

    // 5. High-End Physical Glassmorphism Material
    const physicalMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.12,
      transmission: 0.85,
      ior: 1.54,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      attenuationColor: new THREE.Color(0x38bdf8),
      attenuationDistance: 2.5,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
    });

    // 6. Geometries
    const torusGeom = new THREE.TorusKnotGeometry(1.5, 0.42, 128, 32);
    const crystalGeom = new THREE.IcosahedronGeometry(2.0, 1);
    const sphereGeom = new THREE.OctahedronGeometry(2.2, 2);

    const getGeom = (s: string) => {
      if (s === 'crystal') return crystalGeom;
      if (s === 'sphere') return sphereGeom;
      return torusGeom;
    };

    const mainMesh = new THREE.Mesh(getGeom(activeShape), physicalMat);
    scene.add(mainMesh);
    meshRef.current = mainMesh;

    // 7. Floating Satellite Shards
    const shardGroup = new THREE.Group();
    const shardGeom = new THREE.TetrahedronGeometry(0.25, 0);
    const shardMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.2,
      roughness: 0.2,
      transmission: 0.6,
      ior: 1.45,
    });

    const shardCount = 12;
    const shards: { mesh: THREE.Mesh; speed: number; radius: number; angle: number; yOffset: number }[] = [];

    for (let i = 0; i < shardCount; i++) {
      const shard = new THREE.Mesh(shardGeom, shardMat);
      const angle = (i / shardCount) * Math.PI * 2;
      const radius = 3.2 + Math.random() * 1.5;
      const yOffset = (Math.random() - 0.5) * 2.5;

      shard.position.set(
        Math.cos(angle) * radius,
        yOffset,
        Math.sin(angle) * radius
      );
      shardGroup.add(shard);
      shards.push({
        mesh: shard,
        speed: 0.008 + Math.random() * 0.012,
        radius,
        angle,
        yOffset,
      });
    }
    scene.add(shardGroup);

    // 8. Ethereal Particle Swarm
    const particleCount = 450;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x00f2fe),
      new THREE.Color(0xec4899),
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0x38bdf8),
    ];

    for (let i = 0; i < particleCount; i++) {
      const r = 4.0 + Math.random() * 5.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 9. Mouse Tracking with Inertia Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // 10. Resize Observer
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 11. Render Animation Loop
    let animId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Rotate Main 3D Mesh
      if (mainMesh) {
        mainMesh.rotation.y = elapsed * 0.35 + mouse.x * 1.5;
        mainMesh.rotation.x = elapsed * 0.25 - mouse.y * 1.2;
        mainMesh.rotation.z = Math.sin(elapsed * 0.5) * 0.15;

        // Subtle breathing scale
        const scale = 1 + Math.sin(elapsed * 1.5) * 0.03;
        mainMesh.scale.set(scale, scale, scale);
      }

      // Orbit Shards
      shards.forEach((s) => {
        s.angle += s.speed;
        s.mesh.position.x = Math.cos(s.angle) * s.radius + mouse.x * 0.5;
        s.mesh.position.z = Math.sin(s.angle) * s.radius;
        s.mesh.position.y = s.yOffset + Math.sin(elapsed * 2 + s.angle) * 0.3 + mouse.y * 0.4;
        s.mesh.rotation.x += 0.02;
        s.mesh.rotation.y += 0.03;
      });

      // Slowly rotate particle field
      particles.rotation.y = elapsed * 0.08 + mouse.x * 0.4;
      particles.rotation.x = mouse.y * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusGeom.dispose();
      crystalGeom.dispose();
      sphereGeom.dispose();
      physicalMat.dispose();
      shardGeom.dispose();
      shardMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
    };
  }, [activeShape]);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D WebGL Mounting Canvas */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Geometry Morph Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-2 bg-white/70 backdrop-blur-xl p-1.5 rounded-full border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <span className="font-mono text-[10px] text-neutral-500 uppercase px-2 font-bold">
          3D Core:
        </span>
        <button
          onClick={() => setActiveShape('torus')}
          className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase transition-all ${
            activeShape === 'torus'
              ? 'bg-neutral-900 text-white shadow-sm'
              : 'text-neutral-600 hover:text-black hover:bg-black/5'
          }`}
        >
          Torus Knot
        </button>
        <button
          onClick={() => setActiveShape('crystal')}
          className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase transition-all ${
            activeShape === 'crystal'
              ? 'bg-neutral-900 text-white shadow-sm'
              : 'text-neutral-600 hover:text-black hover:bg-black/5'
          }`}
        >
          Crystal
        </button>
        <button
          onClick={() => setActiveShape('sphere')}
          className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase transition-all ${
            activeShape === 'sphere'
              ? 'bg-neutral-900 text-white shadow-sm'
              : 'text-neutral-600 hover:text-black hover:bg-black/5'
          }`}
        >
          Quantum
        </button>
      </div>

      {/* Cursor Interaction Hint */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden sm:flex items-center space-x-2 font-mono text-[11px] text-neutral-500 bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/60">
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <span>Move cursor to guide 3D refraction physics</span>
      </div>
    </div>
  );
};

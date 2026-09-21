import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface PaintballGunProps {
  isActive: boolean;
}

export const PaintballGun: React.FC<PaintballGunProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const gunMeshRef = useRef<THREE.Group | null>(null);
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const recoilRef = useRef(0);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 3);
    cameraRef.current = camera;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      rendererRef.current = renderer;
      containerRef.current.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGLRenderer unavailable in this environment:', e);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight2.position.set(-5, -2, -2);
    scene.add(dirLight2);

    // Load pistol model
    const loader = new GLTFLoader();
    loader.load(
      '/models/pistol.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.55, 0.55, 0.55);
        // Position at bottom center/right
        model.position.set(0.4, -0.65, 1.2);
        model.rotation.set(0, -Math.PI / 2, 0);

        gunMeshRef.current = model;
        scene.add(model);
      },
      undefined,
      (err) => {
        console.warn('Fallback: pistol model load error or offline', err);
      }
    );

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      targetRotationRef.current.y = -Math.PI / 2 + normX * 0.45;
      targetRotationRef.current.x = -normY * 0.35;
    };

    // Recoil on click
    const handleMouseDown = () => {
      if (!isActive) return;
      recoilRef.current = 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation render loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (gunMeshRef.current) {
        // Smooth lerp rotation toward target
        gunMeshRef.current.rotation.y += (targetRotationRef.current.y - gunMeshRef.current.rotation.y) * 0.12;
        gunMeshRef.current.rotation.x += (targetRotationRef.current.x - gunMeshRef.current.rotation.x) * 0.12;

        // Apply and damp recoil
        if (recoilRef.current > 0.001) {
          gunMeshRef.current.position.z = 1.2 - recoilRef.current * 0.5;
          gunMeshRef.current.rotation.x -= recoilRef.current * 0.5;
          recoilRef.current *= 0.75;
        } else {
          gunMeshRef.current.position.z = 1.2;
          recoilRef.current = 0;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current?.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-50 transition-transform duration-500 ease-out ${
        isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    />
  );
};

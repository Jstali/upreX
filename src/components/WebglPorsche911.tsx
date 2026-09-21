import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const COLOR_SWATCHES = [
  { name: 'Matte Stealth Black', hex: '#141414', metalness: 0.2, roughness: 0.4 },
  { name: 'Guards Red', hex: '#d91424', metalness: 0.4, roughness: 0.2 },
  { name: 'Liquid Silver Metallic', hex: '#c8cbd0', metalness: 0.9, roughness: 0.15 },
  { name: 'Acid Green', hex: '#b3ff00', metalness: 0.3, roughness: 0.25 },
  { name: 'Riviera Blue', hex: '#00a3e0', metalness: 0.5, roughness: 0.2 },
  { name: 'Ultra Violet', hex: '#5e17eb', metalness: 0.6, roughness: 0.2 },
  { name: 'Racing Yellow', hex: '#ffd500', metalness: 0.3, roughness: 0.2 },
];

export const WebglPorsche911: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeColor, setActiveColor] = useState(COLOR_SWATCHES[0]);
  const [isLoading, setIsLoading] = useState(true);
  const bodyMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const carGroupRef = useRef<THREE.Group | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 550;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.2, 1.4, 3.8);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      containerRef.current.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGLRenderer unavailable for Porsche model:', e);
      setIsLoading(false);
      return;
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(-5, 4, -5);
    scene.add(rimLight);

    const groundLight = new THREE.DirectionalLight(0xffffff, 0.8);
    groundLight.position.set(0, -3, 0);
    scene.add(groundLight);

    // Car body material
    const carMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activeColor.hex),
      metalness: activeColor.metalness,
      roughness: activeColor.roughness,
    });
    bodyMaterialRef.current = carMaterial;

    // Load Porsche model
    const loader = new GLTFLoader();
    loader.load(
      '/models/porsche.glb',
      (gltf) => {
        const car = gltf.scene;
        car.scale.set(0.9, 0.9, 0.9);
        car.position.set(0, -0.2, 0);

        // Apply wrap material to car paint / body meshes
        car.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const name = mesh.name.toLowerCase();
            if (
              name.includes('body') ||
              name.includes('paint') ||
              name.includes('car') ||
              name.includes('hood') ||
              name.includes('door')
            ) {
              mesh.material = carMaterial;
            }
          }
        });

        carGroupRef.current = car;
        scene.add(car);
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.warn('Porsche model load notice:', err);
        setIsLoading(false);
      }
    );

    // Orbit controls via direct mouse dragging
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !carGroupRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      carGroupRef.current.rotation.y += deltaX * 0.008;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Auto slow rotation when idle
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (carGroupRef.current && !isDraggingRef.current) {
        carGroupRef.current.rotation.y += 0.002;
      }
      camera.lookAt(0, 0.3, 0);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 550;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && domElement) {
        containerRef.current.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update car material color when swatch changes
  const selectColor = (swatch: typeof COLOR_SWATCHES[0]) => {
    setActiveColor(swatch);
    if (bodyMaterialRef.current) {
      bodyMaterialRef.current.color.set(swatch.hex);
      bodyMaterialRef.current.metalness = swatch.metalness;
      bodyMaterialRef.current.roughness = swatch.roughness;
    }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto my-24 px-5 md:px-10">
      {/* Container Box with corner crosshairs */}
      <div className="relative border border-white/10 rounded-2xl p-6 md:p-10 bg-neutral-950/60 backdrop-blur-sm overflow-hidden">
        {/* Subtle crosshairs in corners */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-neutral-600">+</div>
        <div className="absolute top-4 right-4 font-mono text-[10px] text-neutral-600">+</div>
        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-neutral-600">+</div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-neutral-600">+</div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 z-10 relative">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
              Damn Good Ideas
            </span>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white">
              Concept Porsche 911 Wrap Studio
            </h3>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400">
            [ Drag to rotate 360° ]
          </div>
        </div>

        {/* 3D Canvas Container */}
        <div
          ref={containerRef}
          className="w-full h-[400px] md:h-[550px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 animate-pulse">
                Loading 3D Studio...
              </span>
            </div>
          )}
        </div>

        {/* Swatch Selector Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 z-10 relative">
          <span className="font-mono text-xs text-neutral-400 mr-2">Wrap Color:</span>
          {COLOR_SWATCHES.map((swatch) => {
            const isSelected = activeColor.name === swatch.name;
            return (
              <button
                key={swatch.name}
                onClick={() => selectColor(swatch)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  isSelected
                    ? 'border-white bg-white/10 scale-105 shadow-md'
                    : 'border-white/20 bg-neutral-900/60 hover:border-white/50'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-inner"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className="font-mono text-[11px] text-neutral-200">
                  {swatch.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

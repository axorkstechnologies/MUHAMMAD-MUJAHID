import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingMonolith3DProps {
  className?: string;
}

export const FloatingMonolith3D: React.FC<FloatingMonolith3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    const isHeadless =
      typeof navigator !== 'undefined' &&
      (navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent));

    // Scene, Camera, Renderer
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isHeadless,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Prismatic Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.12,
      metalness: 0.15,
      transmission: 0.85,
      ior: 1.54,
      transparent: true,
      opacity: 0.9,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // 2. Wireframe Lattice Cage
    const wireGeo = new THREE.WireframeGeometry(coreGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xa5f3fc,
      transparent: true,
      opacity: 0.45,
      linewidth: 1
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    wireMesh.scale.setScalar(1.002);
    rootGroup.add(wireMesh);

    // 3. Orbital Metallic Gyroscope Rings (Inner & Outer Torus)
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      metalness: 0.95,
      roughness: 0.2,
      envMapIntensity: 1.5
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    rootGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(2.7, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.25
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    rootGroup.add(ring2Mesh);

    // 4. Floating Ambient Stardust Particles
    const particleCount = isHeadless ? 25 : 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.065,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x38bdf8, 3.5, 12);
    fillLight.position.set(-3, -2, 3);
    scene.add(fillLight);

    const purpleBacklight = new THREE.PointLight(0xc084fc, 3.0, 10);
    purpleBacklight.position.set(0, 3, -4);
    scene.add(purpleBacklight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x050508, 1.2);
    scene.add(hemiLight);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Exponential damping on mouse
      mouse.x += (mouse.targetX - mouse.x) * (delta * 3.5);
      mouse.y += (mouse.targetY - mouse.y) * (delta * 3.5);

      // Rotation & Gentle floating bob
      rootGroup.position.y = Math.sin(time * 1.2) * 0.12;
      rootGroup.rotation.y = time * 0.35 + mouse.x * 0.8;
      rootGroup.rotation.x = time * 0.2 + mouse.y * 0.5;

      // Gyroscope counter-rotations
      ring1Mesh.rotation.z = time * 0.5;
      ring1Mesh.rotation.x = Math.PI / 3 + Math.sin(time * 0.6) * 0.2;

      ring2Mesh.rotation.z = -time * 0.4;
      ring2Mesh.rotation.y = Math.PI / 4 + Math.cos(time * 0.5) * 0.2;

      // Particle subtle rotation
      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);

      if (!isHeadless) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[380px] flex items-center justify-center pointer-events-none ${className}`}
    />
  );
};

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      5000
    );
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const count = 200;
    const waveColor = new THREE.Color(0x2dd4bf);
    const particles: THREE.Mesh[] = [];

    for (let i = 0; i < count; i++) {
      const geometry = new THREE.CircleGeometry(1 + Math.random() * 4, 8);
      const material = new THREE.MeshBasicMaterial({
        color: waveColor,
        transparent: true,
        opacity: 0.3 + Math.random() * 0.7,
      });
      const particle = new THREE.Mesh(geometry, material);

      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 500;
      const z = (Math.random() - 0.5) * 1000;

      particle.position.set(x, y, z);
      particle.userData = { x, y, z, radius: 1 + Math.random() * 4 };

      scene.add(particle);
      particles.push(particle);
    }

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let time = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX - window.innerWidth / 2) * 0.5;
      mouse.y = (event.clientY - window.innerHeight / 2) * 0.5;
    };
    window.addEventListener("mousemove", onMouseMove);

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      target.x += (mouse.x - target.x) * 0.05;
      target.y += (mouse.y - target.y) * 0.05;
      camera.position.x = target.x * 0.05;
      camera.position.y = -target.y * 0.05;

      particles.forEach((particle) => {
        const data = particle.userData;
        const angle = data.x * 0.005 + time * 0.5;
        const sine = Math.sin(angle);
        const y = sine * 100 + data.y;
        const cosine = Math.cos(angle);
        const z = cosine * 100 + data.z;

        particle.position.y = y;
        particle.position.z = z;
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particles.forEach((p) => {
        p.geometry.dispose();
        (p.material as THREE.Material).dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "55%",
        height: "100%",
        zIndex: 1,
      }}
      className="hidden lg:block"
    />
  );
}

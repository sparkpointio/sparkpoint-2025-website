"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import mesh from '@/lib/assets/Mesh.svg';
import gsap from 'gsap';

export default function AnimatedMesh({
  isDarkMode,
  className,
  customStyles
}: {
  isDarkMode: boolean;
  className?: string;
  customStyles?: React.CSSProperties;
}) {
  const meshRef = useRef(null);

  useEffect(() => {
    const meshElement = meshRef.current;

    if (meshElement) {
      // Create the wave animation
      const tl = gsap.timeline({
        repeat: -1, // Infinite repeat
        yoyo: true, // Back and forth effect
      });

      // Create a slow waving animation
      tl.to(meshElement, {
        duration: 8,
        y: 15,
        x: -10,
        rotation: 1,
        ease: "sine.inOut",
      }).to(meshElement, {
        duration: 8,
        y: -10,
        x: 5,
        rotation: -1,
        ease: "sine.inOut",
      });

      // Clean up animation on component unmount
      return () => {
        tl.kill();
      };
    }
  }, []);

  // Dynamic styles based on theme
  const meshStyles = {
    width: '100%',
    height: 'auto',
    // Apply different filters based on the background theme
    filter: isDarkMode
      ? 'brightness(0.3) contrast(1.2) hue-rotate(20deg) saturate(1.1)' // Darker, more contrasty for dark background
      : 'brightness(0.8) contrast(0.9) hue-rotate(-10deg) saturate(0.95)', // Lighter, softer for light background
    transition: 'filter 0.3s ease-in-out', // Smooth transition between themes
  };

  // Default classes for hero v2 compatibility
  const defaultClasses = "absolute -bottom-16 -right-16 md:-bottom-48 md:-right-44 w-[110vw] h-auto md:w-[90vw] md:h-full -z-10 pointer-events-none transition-opacity duration-300";
  const defaultOpacity = isDarkMode ? 'opacity-75' : 'opacity-60';

  // Use custom className if provided, otherwise use defaults
  const finalClassName = className || `${defaultClasses} ${defaultOpacity}`;

  return (
    <div
      ref={meshRef}
      className={finalClassName}
      style={customStyles}
    >
      <Image
        src={mesh}
        alt="Animated Mesh"
        width={1200}
        height={1200}
        style={meshStyles}
        priority
      />
    </div>
  );
};

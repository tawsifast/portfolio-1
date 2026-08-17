'use client';

import { useMemo } from 'react';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import { useReducedMotion } from 'framer-motion';

const ParticlesBackground = () => {
  const reducedMotion = useReducedMotion();

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.15 } },
        },
      },
      particles: {
        color: { value: '#8ed5ff' },
        links: {
          color: '#38bdf8',
          distance: 130,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          outModes: { default: 'out' },
        },
        number: {
          density: { enable: true, area: 900 },
          value: 48,
        },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    []
  );

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 transform-gpu"
    >
      <ParticlesProvider
        init={async (engine) => {
          await loadSlim(engine);
        }}
      >
        <Particles id="tsparticles-bg" className="h-full w-full" options={options} />
      </ParticlesProvider>
    </div>
  );
};

export default ParticlesBackground;
'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  if (prefersReducedMotion()) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

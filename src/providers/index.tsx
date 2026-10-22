"use client";

import { LazyMotion } from "framer-motion";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { DemoModal } from "@/components/ui/DemoModal";

const loadMotionFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <SmoothScrollProvider>
        {children}
        <DemoModal />
      </SmoothScrollProvider>
    </LazyMotion>
  );
}

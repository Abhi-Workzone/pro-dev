"use client";

import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground").then(mod => ({ default: mod.ThreeBackground })), {
  loading: () => <div className="absolute inset-0 bg-black" />,
  ssr: false
});

export { ThreeBackground as LazyThreeBackground };

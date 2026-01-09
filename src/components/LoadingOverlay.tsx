"use client";

import { PulseLoader } from "react-spinners";

export default function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <PulseLoader size={30} color="#946BC6" />
    </div>
  );
}

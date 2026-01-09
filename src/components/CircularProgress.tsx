// components/CircularProgress.tsx
import React from "react";

interface CircularProgressProps {
  current: number;
  total: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  current,
  total,
}) => {
  const percentage = (current / total) * 100;
  const strokeDasharray = 282.6; // Circumference of the circle (2πr with r ≈ 45)
  const strokeDashoffset =
    strokeDasharray - (percentage / 100) * strokeDasharray;

  return (
    <div className="relative w-20 h-20">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className="text-mainColor"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-semibold">
        {current} of {total}
      </div>
    </div>
  );
};

export default CircularProgress;

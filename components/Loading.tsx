// components/Loading.tsx
import React from "react";
import "./style/styleLoading.css"; // Ensure the CSS for animations is available

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80">
      <div className="flex gap-2">
        <span className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-dot"></span>
        <span className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-dot delay-100"></span>
        <span className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-dot delay-200"></span>
        <span className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-dot delay-300"></span>
        <span className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-dot delay-400"></span>
      </div>
    </div>
  );
};

export default Loading;

import React, { forwardRef } from "react";

interface RewardItemProps {
  label: string;
  points: number;
  status: string;
  bg: string;
  text: string;
  onClaim?: () => void;
}

const RewardItem = forwardRef<HTMLDivElement, RewardItemProps>(
  ({ label, points, status, bg, text, onClaim }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center p-4 w-1/5 rounded-lg ${bg} ${text}`}
      >
        <span className="text-xs font-bold">{label}</span>
        <div className="text-4xl my-2">💎</div>
        <span className="text-sm">{points} Points</span>
        <button
          onClick={onClaim}
          disabled={status !== "Claim"}
          className={`mt-2 px-4 py-1 text-sm rounded-lg ${
            status === "Claim"
              ? "bg-black text-yellow-400 hover:bg-gray-800"
              : "cursor-not-allowed opacity-50"
          }`}
        >
          {status}
        </button>
      </div>
    );
  }
);

RewardItem.displayName = "RewardItem";

export default RewardItem;

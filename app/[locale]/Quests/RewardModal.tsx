import React from "react";
import buttonG from "@/assets/img_QuestsModal/button.svg";
import img_Dim from "@/assets/img_QuestsModal/Dim.webp";
import img_gite from "@/assets/img_QuestsModal/gite.png";
import img_winmore from "@/assets/img_QuestsModal/winmore.png";
import img_bg from "@/assets/img_QuestsModal/bg.png";

const RewardModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[111111] flex items-center justify-center"
      style={{
        backgroundImage: `url('${img_bg.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center p-6">
        {/* Modal Content */}
        <div className=" rounded-lg p-8 text-center max-w-lg w-[90%] shadow-lg">
          {/* Header Image */}
          <div className="relative">
            <img
              src={img_winmore.src}
              alt="Header"
              className="w-64 mx-auto mb-6"
            />
          </div>

          {/* Reward Image */}
          <img
            src={img_gite.src}
            alt="Reward"
            className="w-40 mx-auto mb-4"
          />

          {/* Reward Text */}
          <p className="text-white text-xl mb-4 font-bold">
            You have received 200 Points!
          </p>

          {/* Decorative Box Image */}
          <img
            src={img_Dim.src}
            alt="Decorative Box"
            className="w-32 mx-auto mb-6"
          />

          {/* Collect Button */}
          <button
            onClick={onClose}
            className="relative w-52 h-14 mx-auto flex items-center justify-center"
            style={{
              backgroundImage: `url('${buttonG.src}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              border: "none",
            }}
          >
            <span className="text-white font-bold text-lg">Collect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardModal;

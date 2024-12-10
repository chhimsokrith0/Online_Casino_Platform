"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCoins, faGift, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import VIPLevelModal from "./VIPLevelModal";

const ProfilePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    }
  }, []);


  return (
    <>
      <div ref={containerRef} className="p-6 bg-gray-900 text-gray-300 rounded-lg">
        <div className="flex justify-between items-center">
          {/* Profile Title */}
          <h1 className="text-2xl font-bold">Profile</h1>

          {/* Log Out Button */}
          <button className="text-gray-400 hover:text-white font-medium">Log Out</button>
        </div>
        <br />

        <div className="bg-gray-800 rounded-lg shadow-lg text-white max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="bg-gray-800 p-8 rounded-lg  text-white max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                  alt="Profile Icon"
                  className="w-12 h-12"
                />
                <div>
                  <p className="text-gray-200 text-lg font-bold">0964143284</p>
                  <p className="text-gray-400">Joined On: 25/11/2024</p>
                </div>
              </div>
              <div>
                <button className="px-6 py-2 text-yellow-500 font-bold border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition">
                  Exchange Reward
                </button>
              </div>
            </div>

            {/* Profile Card Section */}
            <div className="rounded-lg flex flex-col sm:flex-row items-center gap-6 ">
              {/* Bronze Card */}
              <div
                className="rounded-lg text-white flex flex-col items-start shadow-lg"
                style={{
                  width: '400px',
                  height: '183px',
                  padding: '20px',
                  backgroundImage: `linear-gradient(109.46deg, #442b19 -11.53%, bisque 119.23%), url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733814096/level-card-texture_aqutqt.png')`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-lg font-bold">Bronze Card</h2>
                  <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                    alt="Bronze Icon"
                    className="w-20 h-20"
                  />
                </div>
                <p className="text-sm text-gray-300 mt-2">Ranking: Bronze Cashback 2%</p>
              </div>

              {/* Progress Section */}
              <div className="p-4 w-full">
                {/* Upgrade Section */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2 cursor-pointer" onClick={toggleModal}>
                    <p className="font-medium text-yellow-500 flex items-center gap-1">
                      Upgrade Your VIP Level
                      <span className="text-red-500 text-xs">&#x25CF;</span>
                    </p>
                    <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500 text-sm" />
                  </div>

                  <p className="text-white font-bold flex items-center gap-2">
                    Current Point:
                    <img
                      src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733034979/eec3c896-fc98-4ed7-a4b1-c0c4d6e63e42_y0p6uo.webp"
                      alt="Diamond Icon"
                      className="w-5 h-5 inline-block"
                    />
                    <span className="text-yellow-500">800.00</span>
                  </p>

                </div>

                {/* Progress Section */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <p>Your progress</p>
                  <p>0/100%</p>
                </div>
                <div className="relative bg-gray-700 h-2 rounded-full w-full">
                  <div
                    className="absolute top-0 left-0 bg-yellow-500 h-full rounded-full"
                    style={{ width: '0%' }}
                  ></div>
                  <div className="absolute top-0 left-0 -mt-2 w-4 h-4 bg-gray-800 border-2 border-yellow-500 rounded-full"></div>
                </div>

                {/* Tier Labels */}
                <div className="flex justify-between text-sm text-gray-400 mt-3">
                  <span className="font-semibold">Bronze</span>
                  <span className="font-semibold">Silver</span>
                </div>
              </div>
            </div>

          </div>


          {/* Balances Section */}
          <div className="grid grid-cols-2 gap-4 p-4 mb-8">
            {/* Your Wallet */}
            <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4 shadow-md">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733812385/1_lxebti.svg"
                alt="Wallet Icon"
                className="w-12 h-12"
              />
              <div>
                <h4 className="text-gray-400 font-medium flex items-center gap-2">
                  Your Wallet
                  <span className="text-gray-500 text-sm cursor-pointer">↻</span>
                </h4>
                <p className="text-yellow-500 text-2xl font-bold">0.00$</p>
              </div>
            </div>

            {/* Rebate Balance */}
            <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4 shadow-md">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733812385/2_buz1yd.svg"
                alt="Rebate Icon"
                className="w-12 h-12"
              />
              <div>
                <h4 className="text-gray-400 font-medium">Rebate Balance</h4>
                <p className="text-yellow-500 text-2xl font-bold">0.00$</p>
              </div>
            </div>

            {/* Cashback Balance */}
            <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4 shadow-md">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733812386/3_kwwv5j.svg"
                alt="Cashback Icon"
                className="w-12 h-12"
              />
              <div>
                <h4 className="text-gray-400 font-medium">Cashback Balance</h4>
                <p className="text-yellow-500 text-2xl font-bold">0.00$</p>
              </div>
            </div>

            {/* Referral Balance */}
            <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4 shadow-md">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733812387/4_ps8sht.svg"
                alt="Referral Icon"
                className="w-12 h-12"
              />
              <div>
                <h4 className="text-gray-400 font-medium">Referral Balance</h4>
                <p className="text-yellow-500 text-2xl font-bold">0.00$</p>
              </div>
            </div>
          </div>




        </div>


        <br />

        {/* Total Bets and Promotions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Bets Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faCoins} className="text-gray-500 text-lg" />
              <h4 className="text-lg font-bold text-white">Total Bets</h4>
            </div>


            <div className="space-y-4">
              {/* Deposit Turnover */}
              <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg shadow-md">
                <span className="text-gray-400 font-medium">Deposit Turnover:</span>
                <span className="text-yellow-500 font-bold text-sm">0.00฿ / 0.00฿</span>
              </div>

              {/* Turnover */}
              <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg shadow-md">
                <span className="text-gray-400 font-medium">Turnover:</span>
                <span className="text-yellow-500 font-bold text-sm">0.00฿</span>
              </div>

              {/* Turn Winlose */}
              <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg shadow-md">
                <span className="text-gray-400 font-medium">Turn Winlose:</span>
                <span className="text-yellow-500 font-bold text-sm">0.00฿</span>
              </div>
            </div>

          </div>

          {/* My Promotions Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faGift} className="text-gray-500 text-lg" />
              <h4 className="text-lg font-bold text-white">My Promotions</h4>
            </div>
            <div className="space-y-4">
              {/* Cashback Section */}
              <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer">
                <div className="flex items-center gap-3">
                  <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733818625/gift.BcLrywuT_j6dl2k.svg"
                    alt="Cashback Icon"
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-medium">คืนยอดเสีย</span>
                    <span className="text-gray-400 text-sm">Cashback</span>
                  </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
              </div>

              {/* Rebate Section */}
              <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer">
                <div className="flex items-center gap-3">
                  <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733818625/gift.BcLrywuT_j6dl2k.svg"
                    alt="Rebate Icon"
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-medium">คืนยอดเดิมพัน</span>
                    <span className="text-gray-400 text-sm">Rebate</span>
                  </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
              </div>
            </div>

          </div>
        </div>

       
      </div>
       {/* Modal */}
       {isModalOpen && <VIPLevelModal onClose={toggleModal} />}
    </>
  );
};

export default ProfilePage;

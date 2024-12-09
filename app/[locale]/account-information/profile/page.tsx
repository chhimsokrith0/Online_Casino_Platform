"use client";

import React from "react";

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-300 rounded-lg">
      {/* Profile Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <p className="text-gray-400">0964143284</p>
          <p className="text-gray-400">Joined On: 25/11/2024</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-yellow-500 font-bold hover:underline">Log Out</button>
          <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-full shadow hover:bg-yellow-600">
            Exchange Reward
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Bronze Card"
              className="w-12 h-12"
            />
            <div>
              <h2 className="text-lg font-bold text-yellow-500">Bronze Card</h2>
              <p className="text-gray-400">Ranking: Bronze Cashback 2%</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <p>Your progress</p>
            <p>0/100%</p>
          </div>
          <div className="bg-gray-700 h-2 rounded-full mt-2 mb-4">
            <div className="bg-yellow-500 h-full w-0 rounded-full"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Bronze</span>
            <span>Silver</span>
          </div>
        </div>

        {/* Points and Balances */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-gray-400">Your Wallet</h4>
            <p className="text-yellow-500 text-xl font-bold">0.00฿</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-gray-400">Rebate Balance</h4>
            <p className="text-yellow-500 text-xl font-bold">0.00฿</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-gray-400">Cashback Balance</h4>
            <p className="text-yellow-500 text-xl font-bold">0.00฿</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h4 className="text-gray-400">Referral Balance</h4>
            <p className="text-yellow-500 text-xl font-bold">0.00฿</p>
          </div>
        </div>
      </div>

      {/* Total Bets and Promotions */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-bold text-white mb-4">Total Bets</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Deposit Turnover:</span>
              <span className="text-yellow-500 font-bold">0.00฿ / 0.00฿</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Turnover:</span>
              <span className="text-yellow-500 font-bold">0.00฿</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Turn Winlose:</span>
              <span className="text-yellow-500 font-bold">0.00฿</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-bold text-white mb-4">My Promotions</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer">
              <span className="text-white">คืนยอดเสีย</span>
              <span className="text-gray-400">Cashback</span>
            </div>
            <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer">
              <span className="text-white">คืนยอดเดิมพัน</span>
              <span className="text-gray-400">Rebate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

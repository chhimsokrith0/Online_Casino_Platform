"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGift,
  faDiamond,
  faWallet,
  faExchangeAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const AccountInformation = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-900 shadow-md">
        <h2 className="text-white text-xl font-bold flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-yellow-500" />
          Account Information
        </h2>
        <FontAwesomeIcon
          icon={faExchangeAlt}
          className="text-gray-400 text-xl cursor-pointer hover:text-white"
          onClick={() => console.log("Settings clicked")}
        />
      </div>

      {/* Sidebar and Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-4">
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-white font-bold cursor-pointer hover:text-yellow-500">
              <FontAwesomeIcon icon={faUser} />
              My Profile
            </li>
            <li className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-yellow-500">
              <FontAwesomeIcon icon={faDiamond} />
              Rebate
            </li>
            <li className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-yellow-500">
              <FontAwesomeIcon icon={faGift} />
              Cashback
            </li>
            <li className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-yellow-500">
              <FontAwesomeIcon icon={faWallet} />
              Total Bet
            </li>
            <li className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-yellow-500">
              <FontAwesomeIcon icon={faGift} />
              Redeem History
            </li>
            <li className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-yellow-500">
              <FontAwesomeIcon icon={faGift} />
              Referral
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="w-3/4 p-6">
          {/* Profile Section */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-white text-lg font-bold">Profile</h3>
              <p className="text-gray-400 text-sm">0964143284</p>
              <p className="text-gray-400 text-sm">Joined On: 25/11/2024</p>
            </div>
            <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow hover:bg-yellow-600">
              Exchange Reward
            </button>
          </div>

          {/* Card and Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-gray-700 p-4 rounded-lg">
              <h4 className="text-yellow-500 text-lg font-bold">Bronze Card</h4>
              <p className="text-gray-400 text-sm">Ranking: Bronze Cashback 2%</p>
              <p className="text-gray-400 text-sm">Your progress: 0/100%</p>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <h5 className="text-white text-lg">Your Wallet</h5>
                <p className="text-yellow-500 text-xl font-bold">0.00฿</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <h5 className="text-white text-lg">Rebate Balance</h5>
                <p className="text-yellow-500 text-xl font-bold">0.00฿</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <h5 className="text-white text-lg">Referral Balance</h5>
                <p className="text-yellow-500 text-xl font-bold">0.00฿</p>
              </div>
            </div>
          </div>

          {/* Total Bets */}
          <div className="mt-6">
            <h4 className="text-white text-lg font-bold">Total Bets</h4>
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
              <div>
                <p className="text-gray-400">Deposit Turnover:</p>
                <p className="text-white font-bold">0.00฿ / 0.00฿</p>
              </div>
              <div>
                <p className="text-gray-400">Turnover:</p>
                <p className="text-white font-bold">0.00฿</p>
              </div>
            </div>
          </div>

          {/* My Promotions */}
          <div className="mt-6">
            <h4 className="text-white text-lg font-bold">My Promotions</h4>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { title: "คืนยอดเสีย", subtitle: "Cashback" },
                { title: "คืนยอดเดิมพัน", subtitle: "Rebate" },
              ].map((promo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600"
                >
                  <div>
                    <h5 className="text-white font-bold">{promo.title}</h5>
                    <p className="text-gray-400">{promo.subtitle}</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-gray-400 text-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;

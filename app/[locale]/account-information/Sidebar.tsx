"use client";

import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("My Profile");

  const menuItems = [
    { label: "My Profile", link: "/account-information/profile" },
    { label: "History", link: "/account-information/transactions" },
    { label: "Rebate", link: "/account-information/rebate" },
    { label: "Cashback", link: "/account-information/cashback" },
    { label: "Total Bet", link: "/account-information/total-bet" },
    { label: "Redeem History", link: "/account-information/redeem-history" },
    { label: "Point History", link: "/account-information/point-history" },
    { label: "Personal Message", link: "/account-information/personal-message" },
    { label: "Referral", link: "/account-information/affiliate" },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <aside className="bg-gray-800 py-6 px-4 flex flex-col rounded-lg">
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index} className="flex">
            <Link
              href={item.link}
              onClick={() => handleItemClick(item.label)}
              className={`flex items-center px-4 py-3 w-full rounded-full transition ${
                activeItem === item.label
                  ? "bg-yellow-500 text-black font-bold"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

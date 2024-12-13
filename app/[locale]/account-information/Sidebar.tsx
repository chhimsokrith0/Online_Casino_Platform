"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const t = useTranslations("accountInformation");
  const [activeItem, setActiveItem] = useState<string>("");

  const menuItems = [
    { label: t("menu.myProfile"), link: "/account-information/profile" },
    { label: t("menu.history"), link: "/account-information/transactions" },
    { label: t("menu.rebate"), link: "/account-information/rebate" },
    { label: t("menu.cashback"), link: "/account-information/cashback" },
    { label: t("menu.totalBet"), link: "/account-information/total-bet" },
    { label: t("menu.redeemHistory"), link: "/account-information/redeem-history" },
    { label: t("menu.pointHistory"), link: "/account-information/current-point" },
    { label: t("menu.personalMessage"), link: "/account-information/forum/inbox" },
    { label: t("menu.referral"), link: "/account-information/affiliate" },
  ];

  useEffect(() => {
    const storedActiveItem = localStorage.getItem("activeMenuItem");
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    } else {
      setActiveItem("My Profile");
    }
  }, []);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    localStorage.setItem("activeMenuItem", label);
  };

  return (
    <aside className="bg-gray-900 py-6 px-4 flex flex-col rounded-lg">
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index} className="flex">
            <Link
              href={item.link}
              onClick={() => handleItemClick(item.label)}
              className={`flex items-center px-4 py-3 w-full rounded-full transition ${
                activeItem === item.label
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold"
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

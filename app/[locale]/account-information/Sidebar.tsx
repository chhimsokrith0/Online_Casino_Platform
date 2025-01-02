"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const t = useTranslations("accountInformation");
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    if (!pathname) return;

    // Dynamically set 'activeItem' based on current pathname
    if (pathname.includes("/account-information/profile")) {
      setActiveItem("profile");
    } else if (pathname.includes("/account-information/transactions")) {
      setActiveItem("transactions");
    } else if (pathname.includes("/account-information/rebate")) {
      setActiveItem("rebate");
    } else if (pathname.includes("/account-information/cashback")) {
      setActiveItem("cashback");
    } else if (pathname.includes("/account-information/total-bet")) {
      setActiveItem("totalBet");
    } else if (pathname.includes("/account-information/redeem-history")) {
      setActiveItem("redeemHistory");
    } else if (pathname.includes("/account-information/current-point")) {
      setActiveItem("pointHistory");
    } else if (pathname.includes("/account-information/forum/inbox")) {
      setActiveItem("personalMessage");
    } else if (pathname.includes("/account-information/affiliate")) {
      setActiveItem("referral");
    } else {
      setActiveItem("");
    }
  }, [pathname]);

  // Map each item to a "key" that should match what we set in the useEffect above
  const menuItems = [
    { key: "profile",         label: t("menu.myProfile"),      link: "/account-information/profile" },
    { key: "transactions",    label: t("menu.history"),        link: "/account-information/transactions" },
    { key: "rebate",          label: t("menu.rebate"),         link: "/account-information/rebate" },
    { key: "cashback",        label: t("menu.cashback"),       link: "/account-information/cashback" },
    { key: "totalBet",        label: t("menu.totalBet"),       link: "/account-information/total-bet" },
    { key: "redeemHistory",   label: t("menu.redeemHistory"),  link: "/account-information/redeem-history" },
    { key: "pointHistory",    label: t("menu.pointHistory"),   link: "/account-information/current-point" },
    { key: "personalMessage", label: t("menu.personalMessage"), link: "/account-information/forum/inbox" },
    { key: "referral",        label: t("menu.referral"),       link: "/account-information/affiliate" },
  ];

  return (
    <aside className="bg-gray-900 py-6 px-4 flex flex-col rounded-lg">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.key} className="flex">
            <Link
              href={item.link}
              className={`flex items-center px-4 py-3 w-full rounded-full transition ${
                activeItem === item.key
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold shadow-lg"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
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

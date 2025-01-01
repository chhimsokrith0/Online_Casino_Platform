"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const t = useTranslations("accountInformation");
  const pathname = usePathname(); // Get the current route dynamically

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

  const isActiveMenuItem = (itemLink: string): boolean => {
    if (!pathname) return false;

    // Normalize both the pathname and itemLink to ensure they match accurately
    const normalizedPathname = pathname.replace(/\/$/, ""); // Remove trailing slash
    const normalizedItemLink = itemLink.replace(/\/$/, ""); // Remove trailing slash

    return normalizedPathname === normalizedItemLink || normalizedPathname.startsWith(normalizedItemLink);
  };

  return (
    <aside className="bg-gray-900 py-6 px-4 flex flex-col rounded-lg">
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index} className="flex">
            <Link
              href={item.link}
              className={`flex items-center px-4 py-3 w-full rounded-full transition ${
                isActiveMenuItem(item.link)
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

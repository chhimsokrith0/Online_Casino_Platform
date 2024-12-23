import React from "react";
import { useTranslations } from "next-intl";
interface TabsProps {
  activeTab: "deposit" | "withdraw" | "transfer";
  setActiveTab: (tab: "deposit" | "withdraw" | "transfer") => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const t = useTranslations("wallet.tabs");
  return (
    <div className="flex items-center justify-center mb-6">
      <button
        className={`flex-1 py-2 text-sm font-bold ${
          activeTab === "deposit"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-l-full"
            : "bg-gray-700 text-white"
        }`}
        onClick={() => setActiveTab("deposit")}
      >
        { t('deposit') }
      </button>
      <button
        className={`flex-1 py-2 text-sm font-bold ${
          activeTab === "withdraw"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
            : "bg-gray-700 text-white"
        }`}
        onClick={() => setActiveTab("withdraw")}
      >
        { t('withdraw') }
      </button>
      <button
        className={`flex-1 py-2 text-sm font-bold ${
          activeTab === "transfer"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-r-full"
            : "bg-gray-700 text-white"
        }`}
        onClick={() => setActiveTab("transfer")}
      >
        { t('transfer') }
      </button>
    </div>
  );
};

export default Tabs;

"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import NewMessageModal from "./NewMessageModal";
import { useTranslations } from "next-intl";
const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("accountInformation.personalMessage");
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-white">{t("title")}</h2>
        <button
          onClick={toggleModal}
          className="flex items-center gap-2 px-4 py-2 border border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-gray-800"
        >
          <FontAwesomeIcon icon={faEdit} />
          <span>{t("actions.newMessage")}</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <NewMessageModal isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default Header;

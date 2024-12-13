"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import NewMessageModal from "./NewMessageModal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-white">Personal Message</h2>
        <button
          onClick={toggleModal}
          className="flex items-center gap-2 px-4 py-2 border border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-gray-800"
        >
          <FontAwesomeIcon icon={faEdit} />
          <span>New Message</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <NewMessageModal onClose={toggleModal} />}
    </div>
  );
};

export default Header;

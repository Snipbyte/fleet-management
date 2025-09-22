"use client";
import React from "react";
import CustomModal from "../../../common/modal/modal";
import Button from "../../../common/button/button";

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onDelete, customerName }) => {
  const handleDelete = () => {
    onDelete();
    onRequestClose();
  };

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} title="Delete Customer">
      <div className="p-4 space-y-4">
        <p>Are you sure you want to delete this customer?</p>
        <p className="text-sm text-gray-500">This action cannot be undone. Any rides booked to this customer must be reassigned.</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onRequestClose} className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 duration-300 rounded-md">
            Cancel
          </button>
          <Button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md">
            Delete
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeleteConfirmationModal;
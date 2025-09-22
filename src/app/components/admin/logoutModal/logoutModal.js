"use client";
import React from "react";
import CustomModal from "../../common/modal/modal";
import Button from "../../common/button/button";

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onClose}
      title="Log Out"
    >
      <p className="text-gray-700 mb-6">
        You are about to log out of your account. Any unsaved changes may be lost,
        and you’ll need to sign in again to continue using the app.  
        Are you sure you want to proceed?
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-gray-200 duration-300 hover:bg-gray-300 text-gray-700"
        >
          Cancel
        </button>
        <Button
          onClick={onConfirm}
          className="px-4 py-2 rounded-lg"
        >
          Logout
        </Button>
      </div>
    </CustomModal>
  );
}

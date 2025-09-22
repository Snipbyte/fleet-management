"use client";
import React, { useState, useEffect } from "react";
import CustomModal from "../../../../common/modal/modal";
import Button from "../../../../common/button/button";

export default function AddReceipt({ isOpen, onClose, onConfirm }) {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState(null);

  // Generate preview if there's at least one image
  useEffect(() => {
    const imageFile = files.find(file => file.type.startsWith("image/"));
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setPreview(url);

      return () => URL.revokeObjectURL(url); // cleanup
    } else {
      setPreview(null);
    }
  }, [files]);

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles).slice(0, 5); // max 5 files
    setFiles(fileArray);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleInputChange = (e) => {
    handleFiles(e.target.files);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onClose}
      title="Add Receipt"
    >
      {/* Drag & Drop Area */}
      <div
        className="w-full border border-dashed rounded-lg py-6 flex flex-col items-center justify-center mb-4 cursor-pointer bg-[#f9f9f9] hover:bg-gray-50 transition relative overflow-hidden"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
        style={{ height: preview ? "300px" : "auto" }}
      >
        <input
          type="file"
          id="fileInput"
          multiple
          accept=".jpg,.png,.pdf"
          className="hidden"
          onChange={handleInputChange}
        />

        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2">
            <img src={"/images/png/logout.png"} className="w-8" />
            <h1 className="font-medium">Upload Receipt</h1>
            <p>Drag and drop files here, or click to select files</p>
            <p className="text-gray-500">Support JPG, PNG, PDF (max 5MB each)</p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-gray-200 duration-300 hover:bg-gray-300 text-gray-700"
        >
          Cancel
        </button>
        <Button
          onClick={() => onConfirm(files)}
          className="px-4 py-2 rounded-lg border-none"
        >
          Save Receipt
        </Button>
      </div>
    </CustomModal>
  );
}

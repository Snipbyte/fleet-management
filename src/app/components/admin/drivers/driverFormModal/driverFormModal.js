// components/DriverFormModal.jsx
"use client";
import React, { useState, useEffect } from "react";
import CustomModal from "../../../common/modal/modal";
import Button from "../../../common/button/button";
import Input from "../../../common/input/input";

const DriverFormModal = ({ isOpen, onRequestClose, onSave, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    phoneNumber: initialData?.phoneNumber || "",
    vehicle: initialData?.vehicle || "",
    license: initialData?.license || "",
    status: initialData?.status || "Active",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        phoneNumber: initialData.phoneNumber || "",
        vehicle: initialData.vehicle || "",
        license: initialData.license || "",
        status: initialData.status || "Active",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        vehicle: "",
        license: "",
        status: "Active",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onRequestClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title={initialData?.name ? "Update Driver Detail" : "Add New Driver"}
    >
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              label="License Number"
              name="license"
              value={formData.license}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Input
              label="Vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <div className="mt-1 space-y-2 space-x-20">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={formData.status === "Active"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={formData.status === "Inactive"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onRequestClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 rounded-md"
          >
            Cancel
          </button>
          <Button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md"
          >
            Save
          </Button>
        </div>
      </form>
    </CustomModal>
  );
};

export default DriverFormModal;
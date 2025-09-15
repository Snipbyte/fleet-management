"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IOSSwitch({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 px-0.5 ${
        checked ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "timing", stiffness: 700, damping: 30 }}
        className="h-5 w-5 rounded-full bg-white shadow-md"
        animate={{ x: checked ? 20 : 0 }}
      />
    </button>
  );
}

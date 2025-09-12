"use client";
import { useState } from "react";

export default function Input({ 
  label, 
  type = "text", 
  icon, 
  error, // 🔹 New prop for error
  required = false,
  ...props 
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full mb-6">
      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          peer w-full border rounded-[10px] px-4 py-2.5
          transition-all duration-200 outline-none bg-[#F6F6F6]
          ${focused 
            ? "border-[#181A1F] border bg-transparent" 
            : "border-[#F6F6F6] focus:ring-0"}
        `}
        {...props}
      />

      {/* Floating Label */}
      <label
        className={`
          absolute left-4 pointer-events-none
          transition-all duration-200
          ${focused || value
            ? "text-xs -top-2 text-[#181A1F] bg-white px-1"
            : "text-[#181A1F] top-3"}
        `}
      >
        {label}{required && <span className="text-red-600"> *</span>}
      </label>

      {/* Right Icon */}
      {icon && (
        <span
          className={`absolute right-3 top-3.5 cursor-pointer transition-colors duration-200 ${
            focused ? "text-black" : "text-gray-500"
          }`}
        >
          {icon}
        </span>
      )}

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-1 mt-1">
          <img src="/png/ibutton.png" className="w-4 "/>
          <p className="text-red-500 text-xs">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}


// "use client";
// import React, { useState, forwardRef } from "react";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// const Input = forwardRef(
//   (
//     { type = "text", placeholder, className = "", label, error, ...rest },
//     ref
//   ) => {
//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//       setShowPassword((prevState) => !prevState);
//     };

//     const inputType =
//       type === "password" ? (showPassword ? "text" : "password") : type;

//     return (
//       <div className="relative">
//         {label && (
//           <label className="block text-sm font-medium text-headingColor my-1">
//             {label}
//           </label>
//         )}
//         <input
//           type={inputType}
//           placeholder={placeholder}
//           className={`outline-none border p-2 rounded mb-4 ${className} ${
//             error ? "border border-red-500" : ""
//           }`}
//           ref={ref}
//           {...rest}
//         />

//         {type === "password" && (
//           <div
//             className="outline-none absolute inset-y-0 top-2 right-3 flex items-center cursor-pointer"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? (
//               <AiFillEyeInvisible size={20} />
//             ) : (
//               <AiFillEye size={20} />
//             )}
//           </div>
//         )}

//         {/* Error message */}
//         {error && (
//           <span className="text-red-500 text-sm my-1">{error.message}</span>
//         )}
//       </div>
//     );
//   }
// );

// export default Input;

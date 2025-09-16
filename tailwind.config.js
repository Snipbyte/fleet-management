/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Buttons
        btnBg: "#000000", // default button background
        btnHover: "#CDAA74", // hover

        // Inputs
        inputBg: "#F6F6F6",
        borderColor: "#E5E5E5",
        lightBorder: "#E5E5E5",

        // Statuses
        paidStatus: "#E8FFF3",
        inProgressStatus: "#FFF4DE",
        pendingStatus: "#F7F3FF",
        rejectedStatus: "#FFE2E5",
        approvedStatus: "#007AFF1A",
        activeBeige: "#FFFCF7"
      },
      animation: {
        marqueeXtoY: "scrollXtoY 10s linear infinite",
        marqueeYtoX: "scrollYtoX 10s linear infinite",
      },
      keyframes: {
        scrollXtoY: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollYtoX: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(50%)" },
        },
      },
    },
  },
  plugins: [],
};

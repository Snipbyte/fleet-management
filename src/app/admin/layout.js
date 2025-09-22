"use client";

import { useState, useEffect } from "react";
import { SidebarProvider } from "../components/admin/sidebarProvider/sidebarProvider";
import AdminSidebar from "../components/admin/adminSidebar/adminSidebar";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "../components/admin/sidebarProvider/sidebarProvider";
import Images from "../components/common/Image/Image";

// Header component with mobile toggle
function AdminHeader() {
  const { isOpen, setIsOpen, isMobile } = useSidebar();

  return (
    <header className="bg-white w-full shadow-sm py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex pl-6 items-center">
          {isMobile && (
            <button
              className="mr-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <FiMenu size={24} />
            </button>
          )}
          <h1 className="text-black">Welcom Admin 👋🏻</h1>
        </div>
        <div className="flex items-center gap-4 px-4">
          <h1>John Smith</h1>
          <img src={"/images/jpg/image.png"} className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}

function AdminLayoutContent({ children }) {
  const { isOpen, isMobile } = useSidebar();

  return (
    <div className="flex min-h-screen w-full">
      {(isOpen || !isMobile) && (
        <div
          className={`${isMobile ? "absolute z-20 w-64 h-full bg-white" : "w-[20%]"
            }`}
        >
          <AdminSidebar />
        </div>
      )}
      <div className="w-full lg:w-[80%] bg-gray-50">
        <AdminHeader />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <SidebarProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SidebarProvider>
  );
}

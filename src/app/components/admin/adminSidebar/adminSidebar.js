"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "../sidebarProvider/sidebarProvider";
import {
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { TbLayout2 } from "react-icons/tb";
import Images from "../../common/Image/Image";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineSettingsSuggest, MdPayment } from "react-icons/md";
import { IoLocationOutline, IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { BiUserPin } from "react-icons/bi";
import { useState } from "react";
import LogoutModal from "../../../components/admin/LogoutModal/LogoutModal";

const sidebarItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: TbLayout2 },
  { name: "Reservation", href: "/admin/reservation", icon: BsCardChecklist },
  { name: "Trips", href: "/admin/trips", icon: IoLocationOutline },
  { name: "Drivers", href: "/admin/drivers", icon: BiUserPin },
  { name: "Customers", href: "/admin/customers", icon: LuUsersRound },
  { name: "Payment", href: "/admin/payment", icon: MdPayment },
  { name: "Payroll", href: "/admin/payroll", icon: AiOutlineDollarCircle },
  { name: "Send Notification", href: "/admin/notifications", icon: IoIosNotificationsOutline },
  { name: "Account Settings", href: "/admin/profile", icon: IoLogOutOutline },
  { name: "Logout", href: "#", icon: MdOutlineSettingsSuggest },
];

export default function AdminSidebar() {
  const { isOpen, setIsOpen, isMobile } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    localStorage.clear();
    router.push("/sign-up");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:static bg-black top-0 bottom-0 left-0 z-20 h-full w-full bg-desColor text-white transition-transform duration-300 ease-in-out md:translate-x-0 shadow-xl`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 sticky top-0 z-10 bg-black py-4">
            <Images src="/images/png/logo.png" className="w-full" />
            {isMobile && (
              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden p-2 rounded-full hover:bg-white/30 transition-colors"
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            )}
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {sidebarItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.name}>
                    {item.name === "Logout" ? (
                      <button
                        onClick={() => setShowLogoutModal(true)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 text-white hover:bg-white/30 hover:text-white"
                      >
                        <div className="flex items-center">
                          <item.icon className="mr-3 h-5 w-5 text-white" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                          ? "bg-btnHover text-white font-medium shadow-sm"
                          : "text-white hover:bg-white/30 hover:text-white"
                          }`}
                        onClick={() => isMobile && setIsOpen(false)}
                      >
                        <div className="flex items-center">
                          <item.icon
                            className={`mr-3 h-5 w-5 ${isActive ? "text-desColor" : "text-white"
                              }`}
                          />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        {isActive && <FiChevronRight className="h-4 w-4" />}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* 🔹 Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}

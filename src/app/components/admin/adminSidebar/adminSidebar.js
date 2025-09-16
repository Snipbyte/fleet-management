"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../sidebarProvider/sidebarProvider";
import {
  FiX,
  FiUsers,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";
import { TbCalendarCheck } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import Images from "../../common/Image/Image";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCategory, MdOutlineSettingsSuggest } from "react-icons/md";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: TbCalendarCheck,
  },
  {
    name: "Reservation",
    href: "/admin/reservation",
    icon: FiUsers,
  },
  {
    name: "Trips",
    href: "/admin/trips",
    icon: FiUsers,
  },
  {
    name: "Drivers",
    href: "/admin/drivers",
    icon: RiTeamLine,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: MdOutlineCategory,
  },
  {
    name: "Payment",
    href: "/admin/payment",
    icon: AiOutlineProduct,
  },
  {
    name: "Payroll",
    href: "/admin/payroll",
    icon: MdOutlineSettingsSuggest,
  },
  {
    name: "Send Notification",
    href: "/admin/notification",
    icon: MdOutlineSettingsSuggest,
  },
  {
    name: "Account SEttings",
    href: "/admin/settings",
    icon: MdOutlineSettingsSuggest,
  },
  {
    name: "logout",
    href: "/sign-up",
    icon: MdOutlineSettingsSuggest,
  },
];

export default function AdminSidebar() {
  const { isOpen, setIsOpen, isMobile } = useSidebar();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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

      {/* Mobile Toggle Button */}
      {/* <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-black text-white shadow-lg hover:bg-gray-800 transition-colors"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button> */}

      {/* Sidebar */}
      <aside
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:static bg-black top-0 bottom-0 left-0 z-20 h-full w-full bg-desColor text-white transition-transform duration-300 ease-in-out md:translate-x-0 shadow-xl`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6  sticky top-0 z-10 bg-black py-4">
            <Images src="/png/logo.png" className="w-full" />
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
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                        ? "bg-white text-desColor font-medium shadow-sm"
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
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-600">
            <button className="flex items-center w-full px-4 py-3 text-sm text-white hover:text-white hover:bg-white/30 rounded-lg transition-colors duration-200">
              <FiLogOut className="mr-3 h-5 w-5 text-white" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

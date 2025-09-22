"use client";
import { usePathname } from "next/navigation";
import Header from "../../common/header/header";
import Footer from "../../common/footer/footer";


export default function MainLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
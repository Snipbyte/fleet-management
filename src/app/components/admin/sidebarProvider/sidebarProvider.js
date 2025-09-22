"use client"

import { createContext, useContext, useState, useEffect } from "react"

const SidebarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  isMobile: false,
})

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile and update state
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      // Close sidebar by default on mobile, open by default on desktop
      if (!mobile && !isOpen) {
        setIsOpen(true)
      } else if (mobile && isOpen) {
        setIsOpen(false)
      }
    }

    // Initial check
    checkIsMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  // Handle escape key to close sidebar on mobile
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isMobile && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscKey)

    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isMobile, isOpen])

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobile, isOpen])

  return <SidebarContext.Provider value={{ isOpen, setIsOpen, isMobile }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => useContext(SidebarContext)

"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Activity, ChartNoAxesCombined, User, LogOut, Store, MessageCircleMore } from "lucide-react";
import React, { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Define your sidebar items directly here
  const sidebarItems = [
    { name: "Dashboard", path: "/dashboard", icon: <ChartNoAxesCombined className="h-5 w-5" /> },
    { name: "Blogs", path: "/blogs", icon: <MessageCircleMore className="h-5 w-5" /> },
    { name: "Marketplace", path: "/marketplace", icon: <Store className="h-5 w-5" /> },
    { name: "Profile", path: "/profile", icon: <User className="h-5 w-5" /> }
  ];

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      const response = await fetch("/api/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        console.error("Failed to sign out");
      }
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <div className="flex h-screen w-64 flex-col justify-between rounded-r-lg border-r-[1px] bg-white p-6 text-blue-950">
      {/* Logo */}
      <div className="mb-8 flex items-center">
        <div className="rounded-full bg-white p-2">
          <Image src="/logo.png" alt="Logo" height={40} width={40} />
        </div>
        <h1 className="ml-3 text-lg font-semibold">User Account</h1>
      </div>

      {/* Sidebar items */}
      <div className="flex-grow">
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            className={`group mb-4 flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors ${
              item.path === pathname ? "bg-blue-950" : "bg-white"
            } hover:bg-blue-950`}
            onClick={() => router.push(item.path)}
          >
            <span className={`${item.path === pathname ? "text-white" : "text-blue-950 group-hover:text-white"}`}>
              {item.icon}
            </span>
            <span className={`${item.path === pathname ? "text-white" : "text-blue-950 group-hover:text-white"}`}>
              {item.name}
            </span>
          </div>
        ))}

        {/* Sign Out Button */}
        <div
          className={`group flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors ${
            isSigningOut ? "cursor-wait bg-red-600" : "bg-white hover:bg-red-600"
          }`}
          onClick={handleSignOut}
        >
          <LogOut className={`h-5 w-5 ${isSigningOut ? "text-white" : "text-red-600 group-hover:text-white"}`} />
          <span className={`${isSigningOut ? "text-white" : "text-red-600 group-hover:text-white"}`}>
            {isSigningOut ? "Signing Out..." : "Sign Out"}
          </span>
        </div>
      </div>
    </div>
  );
}


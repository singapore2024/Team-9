"use client";

import {
  ChartNoAxesCombined,
  LogOut,
  MessageCircleMore,
  Store,
  User,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  name: string;
}

export default function Sidebar({ name }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Define your sidebar items directly here
  const sidebarItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <ChartNoAxesCombined className="h-5 w-5" />,
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: <MessageCircleMore className="h-5 w-5" />,
    },
    {
      name: "Marketplace",
      path: "/marketplace",
      icon: <Store className="h-5 w-5" />,
    },
    { name: "Profile", path: "", icon: <User className="h-5 w-5" /> },
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
    <div className="flex h-screen w-64 flex-col justify-between rounded-r-lg border-r-[1px] bg-white p-6 text-green-950">
      {/* Logo */}
      <div className="mb-8 flex items-center">
        <div className="rounded-full bg-white p-2">
          <Image src="/gdmt.png" alt="Logo" height={40} width={40} />
        </div>
        <h1 className="ml-3 text-lg font-semibold">{`Welcome, ${name}`}</h1>
      </div>

      {/* Sidebar items */}
      <div className="flex-grow">
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            className={`group mb-4 flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors ${
              item.path === pathname ? "bg-green-900" : "bg-white"
            } hover:bg-green-900`}
            onClick={() => router.push(item.path)}
          >
            <span
              className={`${
                item.path === pathname
                  ? "text-white"
                  : "text-green-900 group-hover:text-white"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`${
                item.path === pathname
                  ? "text-white"
                  : "text-green-900 group-hover:text-white"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}

        {/* Sign Out Button */}
        <div
          className={`group flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors ${
            isSigningOut
              ? "cursor-wait bg-red-600"
              : "bg-white hover:bg-red-600"
          }`}
          onClick={handleSignOut}
        >
          <LogOut
            className={`h-5 w-5 ${
              isSigningOut
                ? "text-white"
                : "text-red-600 group-hover:text-white"
            }`}
          />
          <span
            className={`${
              isSigningOut
                ? "text-white"
                : "text-red-600 group-hover:text-white"
            }`}
          >
            {isSigningOut ? "Signing Out..." : "Sign Out"}
          </span>
        </div>
      </div>
    </div>
  );
}

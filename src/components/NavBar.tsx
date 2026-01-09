"use client";

import { User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button-custom";
import { getUser, clearUser } from "@/libs/user";
import { clearToken } from "@/libs/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // run only on client
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    clearToken();
    clearUser();
    router.push("/auth/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center h-16">
      <Button
        onClick={() => router.push("/")}
        className="flex items-center space-x-2 border-none shadow-none"
      >
        <span className="font-semibold text-gray-800">Library App</span>
      </Button>

      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <span>Hi, {user ?? "Guest"}</span>
          <User className="w-4 h-4" />
        </div>
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="flex items-center space-x-1 text-white bg-red-500 border-none rounded-full hover:bg-red-600 hover:text-white"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Button>
      </div>
    </nav>
  );
}

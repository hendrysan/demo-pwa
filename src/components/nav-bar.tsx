"use client";

import { LogOut, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { clearUser, getUser } from "@/libs/user";
import { clearToken } from "@/libs/auth";
import { useRouter } from "next/navigation";

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
    router.push("/auth/register");
  };
  return (
    <div className="flex justify-end p-4 border-b border-white bg-white border-l-2">
      <div className="flex items-center gap-3">
        {/* Search input dengan icon */}
        <div className="relative lg:w-64 flex">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-purple-500/40 bg-white/50 backdrop-blur-sm text-sm focus:outline-none"
          />
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="flex items-center space-x-1 text-white bg-red-500 border-none rounded-full hover:bg-red-600 hover:text-white ml-3"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

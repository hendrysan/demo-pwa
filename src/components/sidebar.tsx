"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/libs/sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/libs/utils";

export default function Sidebar() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const renderMenu = () =>
    sidebarMenu.map((item) => {
      const Icon = item.icon;
      const hasChildren = item.children && item.children.length > 0;
      const isSubmenuOpen = openSubmenu === item.title;
      const isActive =
        pathname === item.href ||
        (hasChildren && item.children!.some((c) => c.href === pathname));

      return (
        <div key={item.href} className="flex flex-col bg-ghost-white">
          {/* Parent menu */}
          {hasChildren ? (
            <button
              onClick={() => setOpenSubmenu(isSubmenuOpen ? null : item.title)}
              className={cn(
                "flex justify-between items-center py-2 px-3 rounded-lg w-full text-left text-sm transition-all duration-200 cursor-pointer border-none",
                isActive
                  ? "text-purple-500 backdrop-blur-md font-semibold"
                  : "text-gray-700 hover:bg-indigo-100/30 hover:backdrop-blur-md hover:text-indigo-700 hover:ring-1 hover:ring-white/20"
              )}
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon className="w-5 h-5" />}
                {item.title}
              </div>
              <span className="flex-shrink-0">
                {isSubmenuOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>
          ) : (
            // Parent tanpa children → bisa klik langsung
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-3 py-2 px-3 rounded-lg w-full text-left text-sm transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-purple-500 text-white backdrop-blur-md"
                  : "text-gray-700 hover:bg-indigo-100/30 hover:backdrop-blur-md hover:text-indigo-700 hover:ring-1 hover:ring-white/20"
              )}
            >
              {Icon && <Icon className="w-5 h-5" />}
              {item.title}
            </Link>
          )}

          {/* Child menu */}
          {hasChildren && isSubmenuOpen && (
            <div className="flex flex-col pl-6 mt-1 gap-1">
              {item.children!.map((child) => {
                const ChildIcon = child.icon;
                const isChildActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "flex items-center gap-2 py-2 px-4 rounded-lg text-sm transition-all duration-200 cursor-pointer",
                      isChildActive
                        ? "bg-purple-500 text-white"
                        : "text-gray-600 hover:bg-indigo-100/30 hover:text-indigo-700"
                    )}
                  >
                    {ChildIcon && <ChildIcon className="w-4 h-4" />}
                    {child.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    });

  return (
    <aside className="hidden md:flex w-64 border-r border-white bg-white/70 backdrop-blur-xl">
      <div className="flex flex-col w-full p-4 gap-6">
        <h2 className="text-2xl mb-4 pl-4">MyApp</h2>
        <nav className="flex flex-col gap-2 mt-4">{renderMenu()}</nav>
      </div>
    </aside>
  );
}

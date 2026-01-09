import { Home, Package2Icon, List } from "lucide-react";

export const sidebarMenu = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  {
    title: "My Books",
    href: "/dashboard/book",
    icon: Package2Icon,
    children: [{ title: "List Books", href: "/dashboard/book", icon: List }],
  },
];

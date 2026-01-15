import { Home, Package2Icon, List, PencilIcon, BookAIcon } from "lucide-react";

export const sidebarMenu = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  {
    title: "My Books",
    href: "/dashboard/book",
    icon: Package2Icon,
    children: [{ title: "List Books", href: "/dashboard/book", icon: List }],
  },
  {
    title: "Rental",
    href: "/dashboard/rental",
    icon: BookAIcon,
    children: [
      {
        title: "List Rental's Book",
        href: "/dashboard/rental",
        icon: List,
      },
      {
        title: "Rental A Books",
        href: "/dashboard/rental/new",
        icon: PencilIcon,
      },
    ],
  },
];

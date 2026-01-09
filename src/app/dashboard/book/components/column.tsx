import { formatDate } from "@/libs/utils";

export const columns = () => [
  {
    accessorKey: "id",
    header: "ID",
    meta: { className: "w-[60px]" },
  },
  {
    accessorKey: "title",
    header: "Title",
    meta: { className: "w-[140px]" },
  },
  {
    accessorKey: "author",
    header: "Author",
    meta: { className: "w-[100px]" },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    meta: { className: "w-[100px]" },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    meta: { className: "w-[120px]" },
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return formatDate(value);
    },
  },
];

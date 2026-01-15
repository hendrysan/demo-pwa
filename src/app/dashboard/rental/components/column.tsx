import { formatDate } from "@/libs/utils";
import ReturnRentalModal from "./return-modal";
import { Button } from "@/components/ui/button-custom";
import { ActivityIcon, CheckCheckIcon } from "lucide-react";

export const columns = (onOpenDetail: (item: any) => void) => [
  {
    accessorKey: "id",
    header: "ID",
    meta: { className: "w-[60px]" },
  },
  {
    accessorKey: "book.title",
    header: "Title",
    meta: { className: "w-[100px]" },
  },
  {
    accessorKey: "book.author",
    header: "Author",
    meta: { className: "w-[100px]" },
  },
  {
    accessorKey: "book.stock",
    header: "Stok",
    meta: { className: "w-[100px]" },
  },
  {
    accessorKey: "rented_at",
    header: "Rented Date",
    meta: { className: "w-[120px]" },
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return formatDate(value);
    },
  },
  {
    accessorKey: "returned_at",
    header: "Returned Date",
    meta: { className: "w-[100px]" },
    cell: ({ getValue }) => {
      const value = getValue();

      const status = value ? (
        <p className="bg-purple-400 text-white p-3 rounded-md">
          {formatDate(value)}
        </p>
      ) : (
        <p className="bg-red-500 text-white p-3 rounded-md">Not returned yet</p>
      );

      return status;
    },
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
  // ACTION COLUMN
  {
    header: "Action",
    id: "actions",
    meta: { className: "w-[120px]" },
    cell: ({ row }: any) => {
      const item = row.original;

      if (!row.original.returned_at) {
        return (
          <Button
            variant="ghost"
            onClick={() => onOpenDetail(item)}
            className="bg-purple-500 text-white cursor-pointer"
          >
            Return
          </Button>
        );
      }
    },
  },
];

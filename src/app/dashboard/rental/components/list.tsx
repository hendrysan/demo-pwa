"use client";

import { DataTable } from "@/components/data-table";
import { useRentals } from "../hooks/useRentalList";
import { columns } from "./column";
import { useState } from "react";
import ReturnRentalModal from "./return-modal";

export default function ListRentalTable() {
  const { rentals, isLoading, reload } = useRentals();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openDetail = (item: any) => {
    setSelected(item);
    setOpen(true);
  };

  if (isLoading) {
    return (
      <div className="p-4 bg-white/70 rounded-lg shadow-xl">
        <h1 className="text-gray-500 font-semibold mb-2">
          List Rental&rsquo;s Book
        </h1>

        <div className="space-y-3 animate-pulse">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-gray-500 font-semibold mb-2">List Book</h1>

      <DataTable columns={columns(openDetail)} data={rentals} />
      <ReturnRentalModal
        open={open}
        onClose={() => setOpen(false)}
        data={selected}
        reload={reload}
      />
    </div>
  );
}

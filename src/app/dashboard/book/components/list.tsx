"use client";

import { DataTable } from "@/components/data-table";
import { columns } from "./column";
import { useBooks } from "../hooks/useBookList";

export default function ListBookTable() {
  const { isLoading, books } = useBooks();

  if (isLoading) {
    return (
      <div className="p-4 bg-white/70 rounded-lg shadow-xl">
        <h1 className="text-gray-500 font-semibold mb-2">List Database</h1>

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

      <DataTable columns={columns()} data={books} />
    </div>
  );
}

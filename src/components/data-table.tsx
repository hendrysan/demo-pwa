"use client";

import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  selectedRow?: RowSelectionState;
  updateSelectedRow?: React.Dispatch<React.SetStateAction<RowSelectionState>>;
}

export function DataTable<TData extends object, TValue>({
  columns,
  data,
  selectedRow = {},
  updateSelectedRow,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getRowId: (row, index) => ((row as any)?.id ?? index).toString(),
    state: { rowSelection: selectedRow, pagination },
    onRowSelectionChange: updateSelectedRow,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-4 rounded-xl bg-white/70 backdrop-blur-xl shadow-lg">
      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-hidden rounded-lg">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id} className="bg-white/50 backdrop-blur-xl">
                {hg.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={`px-4 py-3 text-sm font-semibold text-gray-600 whitespace-normal break-words ${
                      (header.column.columnDef.meta as any)?.className ?? ""
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`px-4 py-4 text-sm text-gray-700 whitespace-normal break-words ${
                        (cell.column.columnDef.meta as any)?.className ?? ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden mt-2">
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <div
              key={row.id}
              className="bg-white/50 backdrop-blur-xl border border-white/30 shadow-sm rounded-xl p-4 mb-3"
            >
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  className="flex justify-between py-2 border-b last:border-none whitespace-normal break-words"
                >
                  <span className="text-xs font-medium text-gray-500">
                    {cell.column.columnDef.header as string}
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </span>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">No results.</div>
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
        <div className="text-sm text-gray-500">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Page controls */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              variant="ghost"
              className="border border-gray-300 px-3 py-1 text-sm"
            >
              Previous
            </Button>

            {/* Page numbers */}
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: table.getPageCount() }).map((_, i) => {
                const pageIndex = table.getState().pagination.pageIndex;
                const total = table.getPageCount();

                const show =
                  i === 0 ||
                  i === total - 1 ||
                  i === pageIndex ||
                  i === pageIndex - 1 ||
                  i === pageIndex + 1;

                if (!show) return null;

                return (
                  <Button
                    key={i}
                    onClick={() => table.setPageIndex(i)}
                    variant="ghost"
                    className={`h-8 w-8 rounded-md text-sm ${
                      pageIndex === i
                        ? "bg-purple-600 text-white"
                        : "border border-gray-300 text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </Button>
                );
              })}
            </div>

            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              variant="ghost"
              className="border border-gray-300 px-3 py-1 text-sm"
            >
              Next
            </Button>
          </div>

          {/* Page size */}
          <select
            className="px-2 py-1 border rounded-md text-sm text-gray-700"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

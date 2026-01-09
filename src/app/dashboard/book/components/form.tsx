"use client";

import * as React from "react";
import { useBookForm } from "../hooks/useBookCreate";

export function BookForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useBookForm();

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter book title"
            {...register("title", { required: "Title is required" })}
            className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <span className="text-red-500 text-sm mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        {/* Author */}
        <div className="flex flex-col">
          <label htmlFor="author" className="mb-1 font-medium text-gray-700">
            Author
          </label>
          <input
            id="author"
            type="text"
            placeholder="Enter author name"
            {...register("author", { required: "Author is required" })}
            className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.author ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.author && (
            <span className="text-red-500 text-sm mt-1">
              {errors.author.message}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="flex flex-col">
          <label htmlFor="stock" className="mb-1 font-medium text-gray-700">
            Stock
          </label>
          <input
            id="stock"
            type="number"
            placeholder="Enter stock count"
            {...register("stock", {
              required: "Stock is required",
              valueAsNumber: true,
              min: { value: 0, message: "Stock must be >= 0" },
            })}
            className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.stock ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.stock && (
            <span className="text-red-500 text-sm mt-1">
              {errors.stock.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

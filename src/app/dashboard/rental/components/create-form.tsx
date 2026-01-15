"use client";

import Select from "react-select";
import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card-custom";

import { useRentalForm } from "../hooks/useRentalForm";

export default function RentalFormPage() {
  const {
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    control,
    bookOptions,
    isLoadingBooks,
  } = useRentalForm();

  return (
    <div className="min-h-screen flex justify-center bg-muted px-4">
      <Card className="w-full max-w-md bg-white h-full">
        <CardHeader>
          <CardTitle>Rental Book</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Controller
                name="bookId"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Select Book"
                    options={bookOptions}
                    isLoading={isLoadingBooks}
                    isClearable
                    value={
                      bookOptions.find((opt) => opt.value === field.value) ||
                      null
                    }
                    onChange={(option) => field.onChange(option?.value || "")}
                  />
                )}
              />
              {errors.bookId && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.bookId.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

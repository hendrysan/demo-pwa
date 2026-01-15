// app/(components)/rental-form/useRentalForm.ts
"use client";

import { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { createRental } from "../service/form";
import { rentalFormSchema, RentalFormValues } from "../schema/input";
import { getBooks } from "../../book/service/list";
import { Book } from "../../book/schema/list";

type SelectOption = {
  value: string;
  label: string;
};

export function useRentalForm() {
  const router = useRouter();

  const [books, setBooks] = useState<Book[]>([]);
  const [isLoadingBooks, setIsLoadingBooks] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<RentalFormValues>({
    resolver: zodResolver(rentalFormSchema),
    defaultValues: {
      bookId: "",
    },
  });

  // fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoadingBooks(true);
        const res = await getBooks();
        setBooks(res.data);
      } catch (err: any) {
        toast.error(err?.message || "Failed to load books");
      } finally {
        setIsLoadingBooks(false);
      }
    };

    fetchBooks();
  }, []);

  // map books → react-select options
  const bookOptions: SelectOption[] = useMemo(
    () =>
      books.map((book) => ({
        value: String(book.id),
        label: book.title,
      })),
    [books]
  );

  const onSubmit = async (values: RentalFormValues) => {
    try {
      const res = await createRental(values);
      if (res) {
        toast.success("Rental created successfully!");
        reset();
        router.push("/dashboard/rental");
      }
    } catch (err: any) {
      toast.error(err?.message || "Failed to create rental");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    control,
    bookOptions,
    isLoadingBooks,
  };
}

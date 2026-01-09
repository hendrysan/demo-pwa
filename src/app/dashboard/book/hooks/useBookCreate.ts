// app/(components)/book-form/useBookForm.ts
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { bookFormSchema, BookFormValues } from "../schema/form";
import { createBook } from "../service/create";

export function useBookForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<BookFormValues>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
      title: "",
      author: "",
      stock: 0,
    },
  });

  const onSubmit = async (values: BookFormValues) => {
    try {
      const res = await createBook(values); // panggil API
      if (res) {
        toast.success("Book saved successfully!");
        reset(); // reset form setelah submit sukses
        router.push("/dashboard/book"); // arahkan ke halaman buku (opsional)
      }
    } catch (err: any) {
      toast.error(err?.message || "Failed to save book");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    control,
  };
}

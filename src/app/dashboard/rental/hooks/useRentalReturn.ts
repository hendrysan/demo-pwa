"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { returnRental } from "../service/return";

export function useReturnRental() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitReturn = async (rentalId: number) => {
    try {
      setIsSubmitting(true); // mulai submit
      await returnRental(rentalId);
      toast.success("Book returned successfully");

      // 🔥 refresh page / re-fetch data di tabel
      router.refresh();
    } catch (err: any) {
      toast.error(err?.message || "Failed to return book");
    } finally {
      setIsSubmitting(false); // selesai submit
    }
  };

  return {
    submitReturn,
    isSubmitting,
  };
}

"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Rental } from "../schema/list";
import { getRentals } from "../service/list";

export function useRentals() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadFlag, setReloadFlag] = useState(false); // 🔥 trigger re-fetch

  useEffect(() => {
    const fetchRentals = async () => {
      setIsLoading(true);
      try {
        const res = await getRentals();
        setRentals(res.data);
      } catch (err: any) {
        toast.error(err?.message || "Failed to load rentals");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentals();
  }, [reloadFlag]); // 🔥 re-run effect ketika reloadFlag berubah

  const reload = () => setReloadFlag((prev) => !prev); // function untuk reload

  return { rentals, isLoading, reload };
}

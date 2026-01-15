"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card-custom";
import { useReturnRental } from "../hooks/useRentalReturn";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface ReturnRentalModalProps {
  open: boolean;
  onClose: () => void;
  data: any;
}

export default function ReturnRentalModal({
  open,
  onClose,
  data,
  reload,
}: ReturnRentalModalProps & { reload: () => void }) {
  const { submitReturn, isSubmitting } = useReturnRental();

  const handleReturn = async (id: number) => {
    // panggil submitReturn dan tunggu hasilnya
    await submitReturn(id);
    // jika sukses, tutup modal
    onClose();
    reload();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-white">
        <DialogHeader>
          <DialogTitle>Return Book</DialogTitle>
        </DialogHeader>
        <Card className="bg-white p-4">
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Are you sure you want to return this book? This action cannot be
              undone.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  className="w-full bg-red-500 text-white hover:bg-red-600"
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button
                className="w-full hover:bg-purple-500 hover:text-white"
                onClick={() => handleReturn(data.id)}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Return Book"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

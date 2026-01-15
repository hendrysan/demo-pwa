// app/(components)/rental-form/schema/form.ts
import { z } from "zod";

export const rentalFormSchema = z.object({
  bookId: z.string().min(1, "Book is required"),
});

export type RentalFormValues = z.infer<typeof rentalFormSchema>;

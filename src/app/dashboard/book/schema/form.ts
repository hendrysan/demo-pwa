// app/(components)/book-form/schema.ts
import { z } from "zod";

export const bookFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  stock: z.number().min(0, "Stock cannot be negative"),
});

export type BookFormValues = z.infer<typeof bookFormSchema>;

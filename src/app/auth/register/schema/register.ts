import { z } from "zod";

// Schema Validasi
export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// TypeScript type
export type RegisterFormValues = z.infer<typeof registerSchema>;

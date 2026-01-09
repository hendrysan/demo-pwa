import { z } from "zod";

// schema validasi
export const loginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// TypeScript type
export type LoginFormValues = z.infer<typeof loginSchema>;

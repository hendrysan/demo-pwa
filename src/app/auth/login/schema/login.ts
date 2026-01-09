import { z } from "zod";

// schema validasi
export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// TypeScript type
export type LoginFormValues = z.infer<typeof loginSchema>;

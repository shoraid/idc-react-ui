import { z } from "zod";

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email field is required" })
		.email({ message: "Invalid email address" }),
	password: z.string().min(1, { message: "Password field is required" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
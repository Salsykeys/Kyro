import { z } from "zod";

export const loginSchema = z.object({
    email: z.email('Invalid email'),
    password: z.string().min(6, 'Password must be atleast 6 characters long'),
});

export const registerSchema = z.object({
    email: z.email('Invalid email'),
    name: z.string().min(1, 'Name is Required'),
    password: z.string().min(6, 'Password must be atleast 6 characters long'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
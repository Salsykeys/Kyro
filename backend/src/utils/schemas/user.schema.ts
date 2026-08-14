import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(3, 'Name is Required'),
    email: z.email('Email is Required'),
    password: z.string().min(6, 'Password is Required')
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInpu = z.infer<typeof updateUserSchema>;
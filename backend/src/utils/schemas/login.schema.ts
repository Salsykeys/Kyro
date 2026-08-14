import { z } from "zod";
import { prisma } from '../../lib/db';

export const loginSchema = z.object({
    email: z.email('Invalid email'),
    password: z.string().min(6, 'Password must be atleast 6 characters long'),
});

export type loginInput = z.infer<typeof loginSchema>
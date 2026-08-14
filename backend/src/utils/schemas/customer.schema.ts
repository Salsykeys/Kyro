import { z } from 'zod';

export  const createCustomerSchema = z.object({
    name: z.string().min(1, 'Name is Required'),
    no_telp: z.string().min(10, 'Phone Number is Required'),
    address: z.string().min(1, 'Address is required'),
});

export const updateCustomerSchema = createCustomerSchema.partial();

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>
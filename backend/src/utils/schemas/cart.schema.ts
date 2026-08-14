import { z } from 'zod';

export const cartSchema = z.object({
    product_id: z.coerce.number().positive('Product is Required'),
    qty: z.coerce.number().int('Quantity is must be at least 1'),
});

export type CartInput = z.infer<typeof cartSchema>
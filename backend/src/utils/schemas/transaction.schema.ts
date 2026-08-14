import { z } from 'zod';

export const transactionSchema = z.object({
    cash: z.coerce.number().nonnegative('Cash is Required'),
    grand_total: z.coerce.number().nonnegative('Grand Total is Required')
});

export type TransactionInput = z.infer<typeof transactionSchema>
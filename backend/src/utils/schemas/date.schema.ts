import { z } from 'zod';

export const dateRangeFilterSchema = z.object({
    start_date: z.coerce.date("Start date must be a valid date"),
    end_date: z.coerce.date("End date must be a valid date")
});

export type DateRangeFilterInput = z.infer<typeof dateRangeFilterSchema>
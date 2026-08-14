import { z } from 'zod';

export const createProductSchema = z.object({
    barcode: z.string().min(1, 'Barcode is Required'),
    category_id: z.coerce.number().positive('Category is Required'),
    title: z.string().min(1, 'Title is Required'),
    description: z.string().min(1, 'Description is Required'),
    image: z.string().min(1, 'Image is Required'),
    buy_price : z.coerce.number().nonnegative('Buy Price is Required'),
    sell_price : z.coerce.number().nonnegative('Sell Price is Required'),
    stock: z.coerce.number().int().nonnegative('Stock is Required'),
});

export const updateProductSchema = createProductSchema.partial();

export type CreateProductInput = z.infer<typeof createProductSchema>
export type UpdateProdcutInput = z.infer<typeof updateProductSchema>
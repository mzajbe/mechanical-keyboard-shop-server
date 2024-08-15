import { z } from "zod";
import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

// Define the Zod schema
const productZodSchema = z.object({
//   id: z.string().nonempty({ message: 'Product ID is required' }),
  image: z.string().nonempty({ message: 'Product image is required' }),
  title: z.string().nonempty({ message: 'Product title is required' }),
  brand: z.string().nonempty({ message: 'Product brand is required' }),
  availableQuantity: z.number().min(0, { message: 'Available quantity must be 0 or greater' }),
  price: z.number().min(0, { message: 'Product price must be 0 or greater' }),
  rating: z.number().min(0).max(5, { message: 'Product rating must be between 0 and 5' }),
  description: z.string().optional(),
});

// Mongoose schema
const productSchema = new Schema<TProduct>({
//   id: { type: String, required: [true, 'Product ID is required'] },
  image: { type: String, required: [true, 'Product image is required'] },
  title: { type: String, required: [true, 'Product title is required'] },
  brand: { type: String, required: [true, 'Product brand is required'] },
  availableQuantity: { type: Number, required: [true, 'Available quantity is required'] },
  price: { type: Number, required: [true, 'Product price is required'] },
  rating: { type: Number, required: [true, 'Product rating is required'] },
  description: { type: String, required: false },
});

// Validate data with Zod before saving to the database
productSchema.pre('save', function (next) {
  const validationResult = productZodSchema.safeParse(this);
  if (!validationResult.success) {
    const errors = validationResult.error.errors.map(err => err.message).join(", ");
    return next(new Error(errors));
  }
  next();
});

export const Product = model<TProduct>("Product", productSchema);

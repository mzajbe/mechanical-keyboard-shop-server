import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";




const productSchema = new Schema<TProduct>({
    id: { type: String, required: [true, 'Product ID is required'] },
    image: { type: String, required: [true, 'Product image is required'] },
    title: { type: String, required: [true, 'Product title is required'] },
    brand: { type: String, required: [true, 'Product brand is required'] },
    availableQuantity: { type: Number, required: [true, 'Available quantity is required'] },
    price: { type: Number, required: [true, 'Product price is required'] },
    rating: { type: Number, required: [true, 'Product rating is required'] },
    description: { type: String, required: false }
  });

  export const Product = model<TProduct>("product",productSchema);
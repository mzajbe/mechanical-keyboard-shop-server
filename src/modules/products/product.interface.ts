import { Model } from "mongoose";



export type TProduct = {
    id: string;
    image: string;
    title: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number;
    description?: string;
  };

//   export type TProduct = Model<TProduct,>
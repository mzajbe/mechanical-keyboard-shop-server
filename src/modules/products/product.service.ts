import { TProduct } from "./product.interface";
import { Product } from "./product.model"


const createProduct = async(payload:TProduct)=>{
    const result = await Product.create(payload);
    return result;
};

const getAllProducts = async () => {
    const result = await Product.find();
    return result;
  };

  const updateProduct = async (id: string, payload: TProduct) => {
    const result = await Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
  };

export const ProductServices = {
    createProduct,
    getAllProducts,
    updateProduct
}
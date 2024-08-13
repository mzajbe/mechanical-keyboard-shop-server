import { Request, Response } from "express";
import { ProductServices } from "./product.service";


const createProduct = async(req:Request,res:Response)=>{
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);

    res.json({
        success:false,
        message: "Product is created successfully!",
        data:result,
    });
}

const getAllProducts = async (req: Request, res: Response) => {
    try {
      const result = await ProductServices.getAllProducts();
  
      res.status(200).json({
        success: true,
        message: "Product are fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch Product!",
        error: err,
      });
    }
  };
  const updateProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const productData = req.body;
      const result = await ProductServices.updateProduct(productId, productData);
  
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not update product!",
        error: err,
      });
    }
  };

export const productControllers = {
    createProduct,
    getAllProducts,
    updateProduct
}
import express from "express";

const router=express.Router();
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProduct,
} from "../controllers/ProductController.js";

router.get('/products',getAllProducts)
router.post("/product/new", createProduct);
router.put("/product/:id", updateProduct);
router.get("/product/:id", getProduct);


router.delete("/product/:id",deleteProduct);

export default router;
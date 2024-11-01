import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";
const router = express.Router();

//post the products
router.post("/", addProduct);

//get the products
router.get("/", getProducts);

//getbyID
router.get("/:id", getProduct);

//Delete the product

router.delete("/:id", deleteProduct);

//Update the product
router.put("/:id", updateProduct);

export default router;

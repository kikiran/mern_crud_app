import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)
      .json({ success: false, message: "Product ID was not found !" });
  }

  try {
    const productById = await Product.findById(id);
    res.status(200).json({ success: true, data: productById });
  } catch (error) {
    res.status(400).json({ success: false, message: "Something went wrong" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: "Something went wrong !" });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "All fileds are mandatory" });
  }

  const addProduct = new Product(product);
  try {
    await addProduct.save();
    res.status(201).json({ success: true, data: addProduct });
  } catch (error) {
    console.log("All Fileds are not added", error.message);
    res.status(500).json({ status: false, message: "Something went wrong !" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Product ID Not found !" });
  }
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);

    if (deleteProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product ID Not found !" });
    }
    res.status(200).json({ success: true, message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong !" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Product ID not found" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong !" });
  }
};

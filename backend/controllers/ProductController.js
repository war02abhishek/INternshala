import express from "express";
import mongoose from "mongoose";
import Product from "../models/ProductModel.js";

export const createProduct = async (req, res, next) => {
  try {
    console.log(req.body);
    //  req.body.user = req.user.id;
    const product = await Product.create(req.body); //requesting database to create

    res.status(201).json({
      sucess: true,
      product,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const productsCount = await Product.countDocuments();

    const products = await Product.find();

    res.status(200).json({
      sucess: true,
      products,
      productsCount,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.status(500).json({
        sucess: true,
        message: "Product Not Found",
      });
    }
     product = await Product.findByIdAndUpdate(req.params.id, req.body, {
       new: true,
       runValidators: true,
       useFindAndModify: false,
     });

     res.status(200).json({
       sucess: true,
       product,
     });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
     const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(500).json({
        sucess: true,
        message: "Product Not Found",
      });
    }
    await Product.findByIdAndRemove(req.params.id);

    res.status(200).json({
      sucess: true,
      message: "Product Deleted Sucessfully",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(500).json({
        sucess: true,
        message: "Product Not Found",
      });
      
    }
    res.status(200).json({
      sucess: true,
      product,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
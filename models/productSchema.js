const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
});

const subcategorySchema = new mongoose.Schema({
  name: String,
  products: [productSchema], // Products are nested within subcategories
});

const categorySchema = new mongoose.Schema({
  name: String,
  subcategories: [subcategorySchema], // Subcategories are nested within categories
  products: [productSchema],
});

const Category = mongoose.model("Category", categorySchema);
const Subcategory = mongoose.model("Subcategory", subcategorySchema);
const Product = mongoose.model("Product", productSchema);

module.exports = { Category, Subcategory, Product };

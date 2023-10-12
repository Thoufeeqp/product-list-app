const { Category, Subcategory, Product } = require("../models/productSchema");

// Create a new product under a subcategory
async function createProduct(req, res) {
  try {
    const { name, subcategoryName, productName } = req.body;

    // Find the subcategory by name
    const subcategory = await Subcategory.findOne({ name: subcategoryName });
    const category = await Category.findOne({ name });

    if (!subcategory) {
      return res.status(404).json({ error: "Subcategory not found" });
    }

    // Create a new product
    const product = new Product({
      name: productName,
    });
    await product.save();

    // Add the product to the subcategory's products array
    category.products.push(product);
    subcategory.products.push(product);
    await category.save();
    await subcategory.save();
    //console.log(subcategory);

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { createProduct };

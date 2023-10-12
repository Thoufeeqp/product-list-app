const { Category, Subcategory } = require("../models/productSchema");

// Create a new category
async function createCategory(req, res) {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

// List all categories with subcategories
async function listCategories(req, res) {
  try {
    const categories = await Category.find().populate("subcategories");
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getoneCategory(req, res) {
  try {
    const { selectedOption } = req.params;
    console.log(selectedOption);
    const category = await Category.findOne({ name: selectedOption });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { createCategory, listCategories, getoneCategory };

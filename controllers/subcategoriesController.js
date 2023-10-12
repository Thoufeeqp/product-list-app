const { Category, Subcategory } = require("../models/productSchema");

// Create a new subcategory under a category
async function createSubcategory(req, res) {
  try {
    const { categoryName, subcategoryName } = req.body;

    // Find the parent category by name
    const category = await Category.findOne({ name: categoryName });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Create a new subcategory
    const subcategory = new Subcategory({ name: subcategoryName });
    await subcategory.save();

    // Add the subcategory to the parent category's subcategories array
    category.subcategories.push(subcategory);
    await category.save();

    res.status(201).json(subcategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
async function getoneSubCategory(req, res) {
  try {
    const { selectedOption } = req.params;
    console.log(selectedOption);
    const category = await Subcategory.findOne({ name: selectedOption });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { createSubcategory, getoneSubCategory };

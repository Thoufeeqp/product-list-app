const express = require("express");
const categorycontroller = require("../controllers/categoriesController");
const subcategorycontroller = require("../controllers/subcategoriesController");
const productcontroller = require("../controllers/productsController");

const router = new express.Router();

router.post("/createcategory", categorycontroller.createCategory);
router.post("/createsubcategory", subcategorycontroller.createSubcategory);
router.post("/createproduct", productcontroller.createProduct);
router.get("/listcategories", categorycontroller.listCategories);
router.get("/getcategory/:selectedOption", categorycontroller.getoneCategory);
router.get(
  "/getsubcategory/:selectedOption",
  subcategorycontroller.getoneSubCategory
);

module.exports = router;

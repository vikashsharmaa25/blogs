const CATEGORY = require("../models/categoryModel.js");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const newCategory = new CATEGORY({ name });
    await newCategory.save();

    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    console.error("Error while creating category:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while creating the category" });
  }
};

const BLOG = require("../models/blogModel");
const { uploadOnCloudinary } = require("../utils/Cloudinary");

exports.blogCreated = async (req, res) => {
  try {
    const { title, description, isFeature } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required." });
    }

    const localBlogImages = req?.files?.blogImage;
    if (!localBlogImages || localBlogImages.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one blog image must be uploaded.",
      });
    }

    // Upload all images to Cloudinary and collect their URLs
    const blogImages = [];
    for (const image of localBlogImages) {
      const uploadedImage = await uploadOnCloudinary(image.path);
      if (!uploadedImage) {
        return res.status(400).json({
          success: false,
          message: "One or more image uploads failed.",
        });
      }
      blogImages.push(uploadedImage.url);
    }

    const newBlog = new BLOG({
      title,
      description,
      blogImage: blogImages, // Store array of image URLs
      isFeature,
    });

    await newBlog.save();

    res.status(201).json({
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error while creating blog:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while creating the blog" });
  }
};

exports.getAllBlog = async (req, res) => {
  try {
    const allBlog = await BLOG.find({});
    return res.status(200).json({
      success: true,
      message: "Fetched all blogs successfully",
      allBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

  exports.updateBlog = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, isFeature } = req.body;

      if (!title || !description) {
        return res
          .status(400)
          .json({ message: "Title and description are required." });
      }

      const blogToUpdate = await BLOG.findById(id);
      if (!blogToUpdate) {
        return res.status(404).json({ message: "Blog not found." });
      }

      const localBlogImages = req?.files?.blogImage;
      let blogImages = blogToUpdate.blogImage;

      if (localBlogImages && localBlogImages.length > 0) {
        for (const image of localBlogImages) {
          const uploadedImage = await uploadOnCloudinary(image.path);
          if (!uploadedImage) {
            return res.status(400).json({
              success: false,
              message: "One or more image uploads failed.",
            });
          }
          blogImages.push(uploadedImage.url);
        }
      }

      blogToUpdate.title = title;
      blogToUpdate.description = description;
      blogToUpdate.isFeature = isFeature;
      blogToUpdate.blogImage = blogImages;

      await blogToUpdate.save();

      res.status(200).json({
        message: "Blog updated successfully",
        blog: blogToUpdate,
      });
    } catch (error) {
      console.error("Error while updating blog:", error);
      res
        .status(500)
        .json({ message: "Something went wrong while updating the blog" });
    }
  };

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blogToDelete = await BLOG.findById(id);
    if (!blogToDelete) {
      return res.status(404).json({ message: "Blog not found." });
    }

    await blogToDelete.remove();

    res.status(200).json({
      message: "Blog deleted successfully",
      blog: blogToDelete,
    });
  } catch (error) {
    console.error("Error while deleting blog:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while deleting the blog" });
  }
};

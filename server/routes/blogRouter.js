const {
  blogCreated,
  getAllBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.js");

const { upload } = require("../middlewares/uploadMiddleware.js");

const blogRouter = require("express").Router();

blogRouter.post(
  "/create-blog",
  upload.fields([{ name: "blogImage", maxCount: 5 }]),
  blogCreated
);

blogRouter.get("/all-blog", getAllBlog);

blogRouter.put(
  "/update-blog/:id",
  upload.fields([{ name: "blogImage", maxCount: 5 }]),
  updateBlog
);

blogRouter.delete("/delete-blog/:id", deleteBlog);

module.exports = blogRouter;

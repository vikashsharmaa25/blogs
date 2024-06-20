import React, { useEffect, useState } from "react";
import axios from "axios";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`/api/blog/all-blog`);
      setBlogs(data?.allBlog);
    } catch (error) {
      console.error("Error fetching blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/api/blog/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="relative h-full">
          <span className="loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">All Blogs</h3>
          <div className="grid sm:grid-cols-2 grid-col-1 gap-4">
            {blogs?.map((blog) => (
              <div
                key={blog._id}
                className="shadow-sm shadow-yellow-300 p-2 rounded-md"
              >
                <img
                  src={blog.blogImage[0]}
                  alt={blog.title}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-bold text-white">{blog.title}</h4>
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <p className="text-gray-400 mb-4">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <div className="flex gap-2 items-center">
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-md w-full"
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllBlog;

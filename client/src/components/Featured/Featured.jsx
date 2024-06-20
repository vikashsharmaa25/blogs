import React, { useEffect, useState } from "react";
import axios from "axios";

function Featured() {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  const getAllBlog = async () => {
    try {
      const { data } = await axios.get(`/api/blog/all-blog`);
      const featured = data?.allBlog?.filter((blog) => blog.isFeature);
      setFeaturedBlogs(featured);
    } catch (error) {
      console.log("Error while getting all blog", error);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <div className="text-white p-8 md:px-20">
      <h1 className="text-3xl font-bold mb-8">Featured Posts</h1>
      <div className="flex h-[400px] gap-4">
        {featuredBlogs.length > 0 && (
          <div className="md:col-span-2 relative h-80 md:h-full rounded-3xl overflow-hidden w-1/2">
            <img
              src={featuredBlogs[0].blogImage[0]}
              alt={featuredBlogs[0].title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-4 left-4 z-10">
              <span className="bg-black text-white px-2 py-1 rounded-md">
                Productivity
              </span>
              <h2 className="mt-2 text-xl font-bold">
                {featuredBlogs[0].title}
              </h2>
            </div>
          </div>
        )}
        <div className="w-1/2 flex flex-col gap-4 h-full">
          {featuredBlogs.slice(1, 3).map((blog) => (
            <div
              key={blog._id}
              className="flex items-center gap-4 rounded-3xl h-full"
            >
              <img
                src={blog.blogImage[0]}
                alt={blog.title}
                className="h-full w-56 object-fill rounded-xl"
              />
              <div>
                <span className="text-yellow-400 rounded-md uppercase font-medium">
                  Code Quality
                </span>
                <h2 className="mt-2 text-xl font-bold">{blog.title}</h2>
                <p className="text-gray-300 mt-1">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;

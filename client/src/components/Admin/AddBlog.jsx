import React, { useState } from "react";
import axios from "axios";

const AddBlog = ({ fetchBlogs, setSelectedOption }) => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    blogImage: "",
    isFeature: false,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBlog({
      ...newBlog,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addNewBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`/api/blog/add-blog`, newBlog);
      fetchBlogs();
      setSelectedOption("all");
    } catch (error) {
      console.error("Error adding blog", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={addNewBlog} className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-white uppercase">
        Add New Blog
      </h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newBlog.title}
        onChange={handleInputChange}
        className="block w-full mb-4 text-white p-3 border border-gray-300 rounded-md bg-opacity-10 bg-white"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newBlog.description}
        onChange={handleInputChange}
        className="block w-full mb-4 text-white p-3 border border-gray-300 rounded-md bg-opacity-10 bg-white"
      ></textarea>
      <input
        type="text"
        name="blogImage"
        placeholder="Image URL"
        value={newBlog.blogImage}
        onChange={handleInputChange}
        className="block w-full mb-4 text-white p-3 border border-gray-300 rounded-md bg-opacity-10 bg-white"
      />
      <label className="flex items-center mb-4 text-white">
        <input
          type="checkbox"
          name="isFeature"
          checked={newBlog.isFeature}
          onChange={handleInputChange}
          className="mr-2"
        />
        Feature this blog
      </label>
      <button
        type="submit"
        className="bg-yellow-400 text-black py-2 px-4 rounded-md float-right font-medium uppercase text-sm"
        disabled={loading}
      >
        {loading ? "Adding Blog..." : "Add Blog"}
      </button>
    </form>
  );
};

export default AddBlog;

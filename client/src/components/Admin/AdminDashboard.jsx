import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="lg:flex h-[600px]">
      <div className="lg:w-[30%] md:p-8 py-4 text-white lg:border-r-yellow-400 border-b lg:border-b-0 lg:border-r border-yellow-400">
        <div className="flex items-center gap-5">
          <img
            src={user?.avatar}
            alt=""
            className="lg:w-[20vmin] w-36 lg:h-[20vmin] h-36 object-fill rounded-full p-1 border border-yellow-400"
          />
          <div className="text-xl">
            <h1 className="uppercase text-yellow-400 font-bold">
              {user?.name}
            </h1>
            <h1 className="text-yellow-400 text-sm">{user?.email}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <NavLink
            to="/admin/add-blog"
            className={({ isActive }) =>
              isActive
                ? "py-2 px-4 rounded-md bg-yellow-400 font-medium text-black"
                : "py-2 px-4 rounded-md bg-gray-700 text-white"
            }
          >
            Add Blog
          </NavLink>
          <NavLink
            to="/admin/all-blog"
            className={({ isActive }) =>
              isActive
                ? "py-2 px-4 rounded-md bg-yellow-400 font-medium text-black"
                : "py-2 px-4 rounded-md bg-gray-700 text-white"
            }
          >
            All Blogs
          </NavLink>
        </div>
      </div>
      <div className="lg:w-[70%] md:p-8 py-4 overflow-y-auto hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

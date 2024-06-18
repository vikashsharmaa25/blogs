import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import Navbar from "./components/Header/Navbar";
import { useSelector } from "react-redux";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddBlog from "./components/Admin/AddBlog";
import { AdminRoute, PrivateRoute } from "./routes/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="add-blog" element={<AddBlog />} />
          {/* <Route path="edit-blog/:id" element={<EditBlog />} />
          <Route path="delete-blog/:id" element={<DeleteBlog />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Header/Navbar";
import Homepage from "./components/HomePage/Homepage";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import { AdminRoute, PrivateRoute } from "./routes/PrivateRoute";
import AddBlog from "./components/Admin/AddBlog";
import AllBlog from "./components/Admin/Allblog";

function App() {
  return (
    <div className="px-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
              <AdminDashboard />
            </AdminRoute>
          }
        >
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="all-blog" element={<AllBlog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

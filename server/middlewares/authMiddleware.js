const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authUser = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user information to request object

    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error("Authentication failed", error);
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // User is an admin, proceed to the next middleware or route handler
  } else {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admins only.",
    });
  }
};

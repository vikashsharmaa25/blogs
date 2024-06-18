const express = require("express");
const { userRegister, userLogin } = require("../controllers/auth");
const { authUser, isAdmin } = require("../middlewares/authMiddleware");
const { upload } = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post(
  "/user/register",
  upload.fields([{ name: "avatar", maxCount: 1 }]),
  userRegister
);
router.post("/user/login", userLogin);

router.get("/user/protected", authUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is a protected route",
    user: req.user,
  });
});

// Example admin route
router.get("/admin", authUser, isAdmin, (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is an admin-only route",
  });
});

module.exports = router;

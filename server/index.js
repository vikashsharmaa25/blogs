const express = require("express");
const { connection } = require("./database/connectDB");
const router = require("./routes/authRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const blogRouter = require("./routes/blogRouter.js");
require("dotenv").config();
const app = express();

// Set the limit to a desired size, e.g., 10mb
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(cookieParser());
app.use("/api/auth", router);
app.use("/api/blog", blogRouter);

// database connection
connection();

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`server listening on : ${PORT}`);
});

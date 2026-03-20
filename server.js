const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// ✅ Connect DB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes (IMPORT + USE CLEANLY)
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/custom-orders", require("./routes/customOrderRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
// ✅ Test route
app.get("/", (req, res) => {
  res.send("Moti Jewellery Backend Running 💎");
});

// ✅ Error handler (ALWAYS LAST)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
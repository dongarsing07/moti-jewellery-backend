const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  removeFromCart
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

// Get cart
router.get("/", protect, getCart);

// Add item
router.post("/", protect, addToCart);

// Remove item
router.delete("/:id", protect, removeFromCart);

module.exports = router;
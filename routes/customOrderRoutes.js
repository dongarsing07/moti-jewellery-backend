const express = require("express");
const router = express.Router();

const {
  createCustomOrder,
  getAllCustomOrders
} = require("../controllers/customOrderController");

const { protect } = require("../middleware/authMiddleware"); // ✅ FIXED
const admin = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Public
router.post("/", upload.single("referenceImage"), createCustomOrder);

// Admin
router.get("/", protect, admin, getAllCustomOrders);

module.exports = router;
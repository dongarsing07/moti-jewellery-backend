const CustomOrder = require("../models/CustomOrder");

// CREATE ORDER
exports.createCustomOrder = async (req, res) => {
  try {
    console.log("📩 Incoming Data:", req.body);
    console.log("📸 File:", req.file);

    const order = await CustomOrder.create({
      ...req.body,
      referenceImage: req.file ? req.file.filename : null,
    });

    res.status(201).json({
      message: "Custom order submitted successfully ✅",
      order,
    });

  } catch (error) {
    console.log("❌ ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
exports.getAllCustomOrders = async (req, res) => {
  try {
    const orders = await CustomOrder.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
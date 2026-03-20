// Get Cart
exports.getCart = async (req, res) => {
  try {
    res.json({
      message: "Cart fetched",
      items: [],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add to Cart
exports.addToCart = async (req, res) => {
  try {
    res.status(201).json({
      message: "Item added to cart",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove from Cart
exports.removeFromCart = async (req, res) => {
  try {
    res.json({
      message: "Item removed from cart",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
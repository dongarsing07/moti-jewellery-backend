const mongoose = require("mongoose");

const customOrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  jewelleryType: String,
  description: String,
  budget: String,
  deadline: String,
  referenceImage: String,
}, { timestamps: true });

module.exports = mongoose.model("CustomOrder", customOrderSchema);
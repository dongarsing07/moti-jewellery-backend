const Contact = require("../models/Contact");

exports.sendContactMessage = async (req, res) => {
  try {
    console.log("📩 Incoming Data:", req.body);

    const { name, email, phone, message } = req.body;

    const newMessage = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      message: "Message saved successfully ✅",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
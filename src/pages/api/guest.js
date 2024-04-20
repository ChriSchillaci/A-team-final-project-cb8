import dbConnect from "../../../db";
import Guest from "../../../models/guest";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let { name, email, telephone, message } = req.body;

      let newGuest = new Guest({
        name,
        email,
        telephone,
        message,
      });

      await newGuest.save();

      return res.status(201).json({ success: true, data: newGuest });
    } catch (error) {
      console.error("Error saving:", error);
      return res.status(500).json({ success: false, error: "Error saving" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }
}

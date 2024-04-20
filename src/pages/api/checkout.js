import dbConnect from "../../../db";
import User from "../../../models/user";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username } = req.body;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      user.library.push(...user.cart);

      user.cart = [];

      await user.save();

      res.status(200).json({ success: true, message: "Checkout successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

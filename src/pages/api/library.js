import dbConnect from "../../../db";
import User from "../../../models/user";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { username } = req.query;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      res.status(200).json({ success: true, library: user.library });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

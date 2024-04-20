import dbConnect from "../../../db";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(400).json({ message: "User not exist" });
    }

    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign(
          { username: user.username },
          process.env.ACCESSTOKEN_SECRET
        );

        res.json({ accessToken });
      } else {
        res.status(403).json({ message: "Authentication failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
}

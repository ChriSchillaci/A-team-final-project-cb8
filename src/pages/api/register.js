import dbConnect from "../../../db";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.ACCESSTOKEN_SECRET;

dbConnect();
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let { username, password, avatar } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      let newUser = new User({
        username,
        password: hashedPassword,
        avatar,
      });

      await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, secretKey, {
        expiresIn: "1h",
      });

      res.status(201).json({
        message: "User registered successfully",
        user: newUser,
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

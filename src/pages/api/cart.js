import dbConnect from "../../../db";
import User from "../../../models/user";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { username, game } = req.body;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      const gameInCart = user.cart.find(
        (cartGame) => cartGame.slug === game.slug
      );

      if (gameInCart) {
        return res
          .status(400)
          .json({ success: false, message: "Game already in cart" });
      }

      user.cart.push(game);

      await user.save();
      res.status(200).json({ success: true, message: "Game added to cart" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else if (req.method === "GET") {
    const { username } = req.query;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      res.status(200).json({ success: true, cart: user.cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { username } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      const gameIndex = user.cart.findIndex(
        (cartGame) => cartGame.slug === req.body.gameSlug
      );

      if (gameIndex !== -1) {
        user.cart.splice(gameIndex, 1);
        await user.save();
      }

      res.status(200).json({ success: true, cart: user.cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

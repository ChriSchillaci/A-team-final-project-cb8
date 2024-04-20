import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: Number, required: true },
  wishlist: {
    type: [
      {
        slug: String,
        name: String,
        background_image: String,
        suggestions_count: Number,
      },
    ],
    default: [],
    required: true,
  },
  cart: {
    type: [
      {
        slug: String,
        name: String,
        background_image: String,
        suggestions_count: Number,
      },
    ],
    default: [],
    required: true,
  },
  library: {
    type: [
      {
        slug: String,
        name: String,
        background_image: String,
        suggestions_count: Number,
      },
    ],
    default: [],
    required: true,
  },
});

let User;

try {
  User = mongoose.model("User");
} catch {
  User = mongoose.model("User", userSchema);
}

export default User;

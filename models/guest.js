import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  message: { type: String, required: true },
});

let Guest;

try {
  Guest = mongoose.model("Guest");
} catch {
  Guest = mongoose.model("Guest", guestSchema);
}

export default Guest;

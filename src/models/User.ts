import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
});



export default mongoose.model("User", userSchema);

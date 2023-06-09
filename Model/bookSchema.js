import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    quantity: { type: Number, required: true },
    available: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true }
  });

  const bookModel = new mongoose.model("Book",bookSchema);

  export default bookModel;

  
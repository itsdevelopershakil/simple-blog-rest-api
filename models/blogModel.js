import mongoose from "mongoose";

// 1️⃣ Define the schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// 2️⃣ Create and export the model
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

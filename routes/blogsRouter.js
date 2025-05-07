import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogPosts,
  getSingleBlogPost,
  updateBlog,
} from "../controllers/blogPostsController.js";

const router = Router();

router.get("/blogs", getAllBlogPosts);
router.get("/blogs/:id", getSingleBlogPost);
router.post("/blogs", createBlog);
router.put("/blogs", updateBlog);
router.delete("/blogs/:id", deleteBlog);

export default router;

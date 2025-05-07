import Blog from "../models/blogModel.js";

export const getAllBlogPosts = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.send(error);
  }
};

export const getSingleBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Blog.findOne({ _id: id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const createBlog = async (req, res) => {
  const body = req.body;
  const { title, description, author } = body;
  if (title && description && author) {
    const post = {
      title,
      description,
      author,
    };
    try {
      const result = await Blog.create(post);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }
};

export const updateBlog = async (req, res) => {
  const { _id, ...body } = req.body;
  if (_id) {
    try {
      const result = await Blog.findByIdAndUpdate(_id, body, { new: true });
      res.send({ message: "Blog updated successfully", data: result });
    } catch (error) {
      res.send(error);
    }
  } else {
    res.send("_id property is required to update blog");
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Blog.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res.status(200).send({ message: "Blog deleted successfully" });
  } catch (error) {
    res.send(error);
  }
};

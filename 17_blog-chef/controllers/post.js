import Post from "../models/post";

export const getAllPosts = () =>
  Post.find({ isApproved: true }).populate("user", "name_id");

export const getPost = (id) => Post.findById(id).populate("user", "name_id");

export const createPost = ({ title, content, user }) =>
  Post.create({ title, content, user });

export const deletePost = (id) => Post.findByIdAndDelete(id);

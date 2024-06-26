import Post from "../models/post";

export const getAllPosts = () =>
  Post.find({ isApproved: true }).populate("user", "name_id");

export const getPost = (id) => Post.findById(id).populate("user", "name_id");

export const createPost = ({ title, content, user }) =>
  Post.create({ title, content, user });

export const deletePost = (id) => Post.findByIdAndDelete(id);

export const getFlaggedPosts = () =>
  Post.find({ isApproved: false }).populate("user", "name");

export const approvePost = (id) =>
  Post.findByIdAndUpdate(id, { isApproved: true }, { new: true });

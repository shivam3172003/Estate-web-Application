import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { set } from "mongoose";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 100000000,
        },
      },
    });

    // setTimeout(() => {
    res.status(200).json(posts);
    // }, 3000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching post with ID:", id);

  try {
    // Ensure `id` is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID format" });
    }

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const token = req.cookies?.token;
    let isSaved = false;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          isSaved = !!saved;

          // Send response only once
          return res.status(200).json({ ...post, isSaved });
        }
      });
    } else {
      return res.status(200).json({ ...post, isSaved: false });
    }
  } catch (err) {
    console.error("Error fetching post:", err);
    return res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const { postData, postDetail } = req.body;
  const tokenUserId = req.userId;

  console.log("Received postData:", postData);
  console.log("Received postDetail:", postDetail);
  console.log("Received userId:", tokenUserId);

  if (!postData || !postDetail || !tokenUserId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        ...postData,
        userId: tokenUserId,
        postDetail: {
          create: postDetail,
        },
      },
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error("Prisma Error:", err);
    res
      .status(500)
      .json({ message: "Failed to create post", error: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update posts" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};

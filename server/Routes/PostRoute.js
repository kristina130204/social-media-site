import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, like, updatePost } from "../Controllers/PostController.js";

const router = express.Router();

router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.put('/:id/like', like);
router.delete('/:id', deletePost);
router.get('/:id/timeline', getTimelinePosts);

export default router;
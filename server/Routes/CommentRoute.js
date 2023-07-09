import express from "express";
import { createComment, deleteComment, getComments, like, updateComment } from "../Controllers/CommentController.js";

const router = express.Router();

router.post('/create', createComment);
router.get('/:id', getComments);
router.put('/:id', updateComment);
router.put('/:id/like', like);
router.delete('/:id', deleteComment);

export default router;
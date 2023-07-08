import express from 'express';
import { deleteUser, follow, getUser, unfollow, updateUser } from '../Controllers/UserController.js';

const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', follow);
router.put('/:id/unfollow', unfollow);

export default router;
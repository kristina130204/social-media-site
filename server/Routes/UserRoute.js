import express from 'express';
import { deleteUser, follow, getUser, updateUser } from '../Controllers/UserController.js';

const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', follow);

export default router;
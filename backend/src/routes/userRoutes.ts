import { Router } from 'express';
import { findAllUsers, findByHome } from '../controller/userController';

const router = Router();

router.get('/find-all', findAllUsers);
router.get('/find-by-home', findByHome);

export default router;

import { Router } from 'express';
import { findByUser, updateUsersForHome } from '../controller/homeController';

const router = Router();

router.get('/find-by-user', findByUser);
router.put('/update-users', updateUsersForHome);

export default router;

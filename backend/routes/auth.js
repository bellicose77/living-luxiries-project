import express from 'express'
import { homeController, logingController, registerController } from '../controllers/auth.js';

const router = express.Router();

router.post('/register',registerController);
router.post('/login',logingController);
router.get('/home',homeController);

export default router;
import express from 'express'
import { logingController, registerController } from '../controllers/auth.js';

const router = express.Router();

router.post('/register',registerController);
router.post('/login',logingController);
router.get('/home',)

export default router;
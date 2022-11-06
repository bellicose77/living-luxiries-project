import express from 'express'
import { homeController, logingController, registerController } from '../controllers/auth.js';
import { checkLogin } from '../middelwares/checklogin.js';

const router = express.Router();

router.post('/register',registerController);
router.post('/login',logingController);
router.get('/home',checkLogin, homeController);

export default router;
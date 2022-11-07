import express from 'express';
import authRoute from './auth.js'
import userRoute from './user.js'
const router = express.Router();


router.use('/api/v1/auth',authRoute);
router.use('/api/v1/users',userRoute);

export default router;
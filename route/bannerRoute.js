import express from 'express'
import { get_banner, update_banner } from '../controller/bannerController.js';

const router = express.Router();

router.get('/get' , get_banner);
router.post('/update' , update_banner);

export {router as bannerRoute};
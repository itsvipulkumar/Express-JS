import express from 'express'
const router = express.Router();
import path from 'path';

// import { homeController } from '../controllers/homeController/js';

router.get("/", (req, res) => {
    res.render('index')
})

export default router;
// module.exports = router
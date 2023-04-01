import express from 'express'
const router = express.Router();
import path from 'path';

// import { homeController } from '../controllers/homeController/js';

router.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'index.html'))
})

export default router;
// module.exports = router
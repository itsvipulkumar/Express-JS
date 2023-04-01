// // import { Router } from "express";
import express from "express";
const router = express.Router();
import { homeContainer } from "../controller/homeContainer";
// homeContiner

router.get("/", homeContainer);

export default router

// router.get("/all", (req, res) => {
//     res.send("This is home page")
// })
// export default router;
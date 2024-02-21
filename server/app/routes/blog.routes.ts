import express from "express";
import { blogController } from "../controller";
import multer from 'multer';
const upload = multer();

const router = express.Router();

router.get("/", blogController.homePage);
router.get("/:slug", blogController.singleBlog);
router.post("/create", upload.single('image'), blogController.createBlog);
router.delete(`/delete/:slug`, blogController.deleteBlog);

export default router;

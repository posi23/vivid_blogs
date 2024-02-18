import express from "express";
import { blogController } from "../controller";

const router = express.Router();

router.get("/", blogController.homePage);
router.post("/", blogController.search);
router.get("/:slug", blogController.singleBlog);
router.post("/create", blogController.createBlog);
router.delete(`/delete/:slug`, blogController.deleteBlog);

export default router;

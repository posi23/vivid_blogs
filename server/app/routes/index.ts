import express from "express";
import blogRoute from "./blog.routes";

const router = express.Router();
const defaultRoutes =
{
  path: "/",
  route: blogRoute,
}

router.use(defaultRoutes.path, defaultRoutes.route);

export default router;

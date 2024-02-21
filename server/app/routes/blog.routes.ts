import express from "express";
import { blogController } from "../controller";
import multer from 'multer';
import path from "path";

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../..', 'public/uploads'),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter(req, file, callback) {
        const extension: boolean = ['.png', '.jpg', '.jpeg'].indexOf(path.extname(file.originalname).toLowerCase()) >= 0;
        const mimeType: boolean = ['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.mimetype) >= 0;

        if (extension && mimeType) {
            return callback(null, true);
        }

        callback(new Error('Invalid file type. Only picture file on type PNG and JPG are allowed!'));
    },
});


const router = express.Router();

router.get("/", blogController.homePage);
router.get("/:slug", blogController.singleBlog);
router.post("/create", upload.single('image'), blogController.createBlog);
router.delete(`/delete/:slug`, blogController.deleteBlog);

export default router;

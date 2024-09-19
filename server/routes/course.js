import express from 'express';
import { fetchLecture, fetchLectures, getAllCourses, getMyCourses, getSingleCourse } from '../controllers/course.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.get("/course/all" , getAllCourses);
router.get("/course/:id" , getSingleCourse);
router.get("/lectures/:id" , isAuth, fetchLectures);
router.get("/lecture/:id" , isAuth, fetchLecture);
router.get("/mycourses" , isAuth, getMyCourses); // since we dont have subscription yet, it will show an empty array

export default router;
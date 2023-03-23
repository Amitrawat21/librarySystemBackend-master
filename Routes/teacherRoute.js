import express from "express"
import Teacher from "../Controller/teacherController.js"

const router = express.Router();

router.post('/add', Teacher.addTeacher);

router.get('/grant/:rollNo',Teacher.grantAccess);

router.post('/login',Teacher.login);

router.post('/logout',Teacher.logout);

router.get('/info/:teacherId',Teacher.getTeacherInfo);

export default  router;
import express from "express"
import Student from "../Controller/studentController.js";

const router = express.Router();

router.post('/add',Student.addStudent);

router.post('/login',Student.login);

router.post('/logout',Student.logout);

router.put('/ask',Student.askPermission);


export default router;

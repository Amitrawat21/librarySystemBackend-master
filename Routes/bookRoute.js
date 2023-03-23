import express from "express"
const router = express.Router();
import Book from "../Controller/bookController.js";

router.post('/add', Book.addBook);

router.get('/getall',Book.getAllBooks);


export default router;
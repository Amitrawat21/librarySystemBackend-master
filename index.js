import express from "express"
const app = express();
import "./Database/database.js";
import bodyParser from "body-parser"


import dot from "dotenv"
const dotenv = dot.config()
import cors from "cors"
import cookieParser from "cookie-parser";
import sessions from "express-session";
// const cookie = require('coo')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: true }));
const oneDay = 1000 * 60 * 60 * 24;

app.use(cookieParser());

// a variable to save a session
var session;
// for session
app.use(sessions({
  key:"user_sid",
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:false,
  cookie: { maxAge: oneDay },
  resave: false
}));

import bookRouter from "./Routes/bookRoute.js"
import teacherRouter from "./Routes/teacherRoute.js"
import studentRouter from "./Routes/studentRoute.js"




app.use(cors({
  origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use('/book',bookRouter);
app.use('/teacher',teacherRouter);
app.use('/student',studentRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log(`app running on port ${process.env.PORT}`);
  });

  export default session;
  


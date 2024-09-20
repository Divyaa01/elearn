import express from "express";
import dotenv from "dotenv";
import { connectDb } from './database/db.js';
import cors from 'cors';


dotenv.config();


const app = express();

//using middleware
app.use(express.json())
//using cors
app.use(cors())

const port =process.env.PORT;

app.get('/',(req,res)=>{
    res.send("server is running");
});

//importing routes
import userRoutes from './routes/user.js'
import CourseRoutes from './routes/course.js'
import AdminRoutes from './routes/admin.js'

//using routes
app.use("/api", userRoutes)
app.use("/api", CourseRoutes)
app.use("/api", AdminRoutes)


app.listen(port , () =>{
    console.log(`your server is running on http://localhost:${port}`);
    connectDb();
});
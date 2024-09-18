import express from "express";
import dotenv from "dotenv";
import { connectDb } from './database/db.js';


dotenv.config();


const app = express();

//using middleware
app.use(express.json)

const port =process.env.PORT;

app.get('/',(req,res)=>{
    res.send("server is running");
});

//importing routes
import userRoutes from './routes/user.js'

//using routes
app.use("/api", userRoutes)


app.listen(port , () =>{
    console.log(`your server is running on http://localhost:${port}`);
    connectDb();
});
import express from "express";
import cors from "cors";
import TodoRoute from "./routes/JadwalRoute.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(JadwalRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));
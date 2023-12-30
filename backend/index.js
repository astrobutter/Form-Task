import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3001, () => console.log("Server started at 3001"));
app.post('/', async ( req, res)=>{
    try {
        console.log(req.body.user)
    } catch (error) {
        console.log(error);
    }
    res.status(201).json(req.body.user);
})
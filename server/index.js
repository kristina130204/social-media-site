import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js";
import CommentRoute from "./Routes/CommentRoute.js";

const app = express();

dotenv.config();

const dbPath = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

mongoose.connect(dbPath, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening at port ${PORT}`)))
    .catch((error) => console.log(error));

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/comment', CommentRoute);
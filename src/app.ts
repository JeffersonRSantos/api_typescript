import express from "express"
import { userRoutes } from "./Routes/UserRoutes"
import { authRoutes } from "./Routes/AuthRoutes"
import bodyParser from "body-parser"
import * as dotenv from "dotenv";
dotenv.config();

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authRoutes)
app.use(userRoutes)

export { app }
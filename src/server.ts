import express from "express";
import { json, urlencoded } from "body-parser";
import routes from './routes'

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(routes)

export default app;

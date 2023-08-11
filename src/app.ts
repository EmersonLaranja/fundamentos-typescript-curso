import express from "express";
import router from "./routes/index.js"; // precisa da extensão .js por ser EcmaSCript
import "reflect-metadata"

const app = express();
app.use(express.json());
router(app)

export default app;


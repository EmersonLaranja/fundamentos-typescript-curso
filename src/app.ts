import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source.js";
import router from "./routes/index.js"; // precisa da extensão .js por ser EcmaSCript
import PetEntity from "./entities/PetEntity.js";

const app = express();
app.use(express.json());
router(app)

AppDataSource.initialize().then(async () => {

  console.log("DataSouce inicializado com sucesso!")
}).catch((error:Error) => console.log(error))


export default app;


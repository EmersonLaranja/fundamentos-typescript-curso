//ATIVIDADE VIDEO 1 - CRIAR ESSE ARQUIVO COM HELLO WORLD
import express, { Response } from "express";
import petRouter from "./petRoutes.js";


const router = (app:express.Router) => {
    app.use("/pets", petRouter);
};

export default router;

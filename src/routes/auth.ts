import { Router } from "express";

import { authController } from "../controllers/AuthController";

export const authRouter = Router();

authRouter.post("/cadastro", authController.cadastrar)

authRouter.post("/login", authController.logar)
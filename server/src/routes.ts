import { Router } from "express";
import { userRouter } from "./modules/user/user.router";

export const apiRoute = Router();
apiRoute.use("/user", userRouter);

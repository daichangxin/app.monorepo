import { Router } from "express";
import { userRouter } from "./modules/user/user.router";
import { sampleRouter } from "./modules/sample/index.router";

export const apiRoute = Router();
apiRoute.use("/user", userRouter);
apiRoute.use("sample", sampleRouter);

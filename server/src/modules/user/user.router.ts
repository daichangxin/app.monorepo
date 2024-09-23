import { Router } from "express";

export const userRouter = Router();

userRouter.get("/list", (req, res) => {
    res.send([]);
});

userRouter.get("/:id", (req, res) => {
    res.send(req.params.id);
});

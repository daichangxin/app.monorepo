import { Router } from "express";
import { aw } from "../../services/aw";

export const userRouter = Router();

userRouter.get("/list", (req, res) => {
    aw.users.list().then((userList) => {
        res.send(userList);
    });
});

userRouter.get("/:id", (req, res) => {
    aw.users.get(req.params.id).then((user) => {
        res.send(user);
    });
});

import compression from "compression";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import { Client, Users } from "node-appwrite";
import { config } from "./config";
import compressFilter from "./utils/compressFilter.util";

const app: Express = express();

const client = new Client();
client
    .setEndpoint(config.appwriteEndpoint)
    .setProject(config.appwriteProjectId)
    .setKey(config.appwriteApiKey);

const users = new Users(client);

app.use(
    cors({
        // origin is given a array if we want to have multiple origins later
        origin: [config.cors_origin],
        credentials: true,
    }),
);

// Helmet is used to secure this app by configuring the http-header
app.use(helmet());

// Compression is used to reduce the size of the response body
app.use(compression({ filter: compressFilter }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/login", (_req: Request, res: Response) => {
    users.list().then((userList) => {
        res.send(userList);
    });
});

export default app;

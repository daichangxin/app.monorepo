import compression from "compression";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import { config } from "./config";
import { apiRoute } from "./routes";
import compressFilter from "./utils/compressFilter.util";

const app: Express = express();

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

app.use("/api", apiRoute);

export default app;

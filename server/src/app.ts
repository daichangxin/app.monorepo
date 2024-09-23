import compression from "compression";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import fs from "fs";
import helmet from "helmet";
import path from "path";
import { config } from "./config";
import logger from "./middleware/logger";
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

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// catch errors
app.use((err, req, res, next) => {
    if (err) {
        logger.error(err);
        res.status(err.getStatusCode() ?? 500);
        return res.json({
            err: err.toJSONSafe(),
        });
    }
    next();
});
app.use("/api", apiRoute);
app.use("/health", (req: Request, res: Response) => {
    res.status(200).send("ok");
});

const clientDir = path.join(__dirname, "../../client/dist");
if (fs.existsSync(clientDir)) {
    app.use("/", express.static(clientDir));
}

export default app;

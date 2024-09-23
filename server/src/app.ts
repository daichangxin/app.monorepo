import compression from "compression";
import cors from "cors";
import express, { Express, Request, Response } from "express";
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

// catch errors
app.use((err, req, res, next) => {
    if (err) {
        err.withErrorId(Math.random().toString(36).slice(2));
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
app.use("/", express.static(path.join(__dirname, "../../client/dist")));

export default app;

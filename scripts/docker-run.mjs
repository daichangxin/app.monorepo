#!/usr/bin/env zx
import "zx/globals";
import { getDockerEnvMap, getPackageJson } from "./env.mjs";

console.log("docker:run start...");

// get package.json
const packageJson = await getPackageJson();
const appName = packageJson.name;

// get docker env file
const envMap = await getDockerEnvMap();
const { SERVER_PORT, EXPOSED_PORT } = envMap;

if (!appName || !SERVER_PORT || !EXPOSED_PORT) {
    console.error(`appName, SERVER_PORT, EXPOSED_PORT are required`);
} else {
    const port = `${EXPOSED_PORT}:${SERVER_PORT}`;
    const app = appName;
    console.log("app:", chalk.blue(appName));
    console.log("port:", chalk.blue(port));

    await $`docker run --restart=always -p ${port} -v $(pwd)/logs:/app/server/logs --add-host='host.docker.internal:host-gateway' -itd --name ${app} ${app}`
        .then((res) => {
            if (res.stderr) {
                console.error("❌", res.stderr);
            } else {
                console.log(`✅Container ${app} is running on port ${port}`);
            }
        })
        .catch((err) => {
            console.error("❌❌", err);
        });
}

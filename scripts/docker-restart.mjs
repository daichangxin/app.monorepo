#!/usr/bin/env zx
import 'zx/globals';
import { getPackageJson } from './env.mjs';

console.log('docker:stop start...');

// get package.json
const packageJson = await getPackageJson();
const appName = packageJson.name;

await $`pnpm run docker:stop`;
await $`pnpm run docker:build`;
await $`pnpm run docker:run`;
// cleanup unused images
await $`docker image prune -f`;

// check if container is running
try {
    const runningState =
        await $`docker inspect -f '{{.State.Running}}' ${appName}`.then((res) =>
            res.stdout.trim(),
        );
    if (runningState === 'true') {
        console.log('✅the container is running');
    } else {
        console.log('❌the container is not running');
    }
} catch (_) {
    console.error('❌the container is not running');
}

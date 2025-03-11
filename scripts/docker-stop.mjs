#!/usr/bin/env zx
import 'zx/globals';
import { getPackageJson } from './env.mjs';

console.log('docker:stop start...');

// get package.json
const packageJson = await getPackageJson();
const appName = packageJson.name;

try {
    const runningState =
        await $`docker inspect -f '{{.State.Running}}' ${appName}`.then((res) =>
            res.stdout.trim(),
        );
    console.log('isRunning:', runningState);
    if (runningState === 'true') {
        await $`docker stop ${appName}`;
        console.log(`✅Container ${appName} is stopped`);
    }
    await $`docker rm ${appName}`;
    console.log(`✅Container ${appName} is removed`);
} catch (_) {
    console.error('app is not running');
}

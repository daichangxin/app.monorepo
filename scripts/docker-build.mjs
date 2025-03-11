#!/usr/bin/env zx
import 'zx/globals';
import { getPackageJson } from './env.mjs';

console.log('docker:build start...');

// get package.json
const packageJson = await getPackageJson();
const appName = packageJson.name;

const $1 = $({ timeout: '10m' });
$1`docker build -t ${appName} .`
    .then((res) => {
        if (res.stderr) {
            console.error('❌', res.stderr);
        } else {
            console.log(`✅Image ${appName} is built`);
        }
    })
    .catch((err) => {
        console.error('❌❌', err);
    });

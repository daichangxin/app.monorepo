#!/bin/bash

if ! command -v pnpm &> /dev/null; then
    npm install -g pnpm
fi

git fetch --all
git reset --hard origin/master

pnpm install
pnpm app:deploy

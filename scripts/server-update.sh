#!/bin/bash

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    # Install pnpm globally
    npm install -g pnpm
fi

git fetch --all
git reset --hard origin/master

pnpm install
pnpm docker:restart

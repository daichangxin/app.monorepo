FROM node:20-alpine as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_NPM_REGISTRY="https://registry.npmmirror.com"
RUN corepack enable

FROM base AS prod-deps
COPY . /app
WORKDIR /app/server
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile --filter=server --config.dedupe-peer-dependents=false

FROM base AS build
COPY . /app
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build:prod


FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=prod-deps /app/server/node_modules /app/server/node_modules
COPY --from=build /app/client/dist /app/client/dist
COPY --from=build /app/server/dist /app/server/dist

WORKDIR /app/server
# set env file
ENV ENV_FILE="./dist/.env.prod"
EXPOSE 3000

ENTRYPOINT ["node", "./dist/index.js"]

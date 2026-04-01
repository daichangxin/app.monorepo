FROM node:20-alpine AS base

FROM base AS server
WORKDIR /app
COPY server/.deploy/node_modules ./node_modules
COPY server/dist ./dist
ENV ENV_FILE="./dist/.env.prod"
ENTRYPOINT ["node", "./dist/index.js"]

FROM nginx:alpine AS nginx
COPY client/dist /usr/share/nginx/html
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

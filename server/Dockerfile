FROM node:18-alpine

COPY . /usr/src/server

# Create server directory
WORKDIR /usr/src/server

RUN npm install -g pnpm
RUN pnpm install

EXPOSE 3000

ENV NODE_ENV production

CMD ["npm", "run", "start:prod"]
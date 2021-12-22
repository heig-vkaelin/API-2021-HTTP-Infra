#Build stage
FROM node:16-alpine as builder

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY src/package.json src/package-lock.json /home/node/app/

RUN npm ci

COPY src/ /home/node/app/

RUN node ace build --production && cd build && npm ci --production

COPY src/.env build/

#Run stage
FROM node:16-alpine as app

RUN apt-get update && \
  apt-get install -y vim

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /home/node/app/build ./build

EXPOSE 3333

CMD sh -c 'cd build && node server.js'
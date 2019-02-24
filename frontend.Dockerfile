# FROM node:8-alpine
FROM node:10.15.1-alpine as build

WORKDIR /var/tmp/

COPY src/client/ /var/tmp/src/client/
COPY config/ /var/tmp/config/
COPY package.json /var/tmp/
COPY .babelrc /var/tmp/

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --production &&\
  npm run build &&\
  rm -rf src/ &&\
  rm -rf node_modules/ &&\
  rm -rf config/ &&\
  apk del native-deps

FROM node:10.15.1-alpine as production

WORKDIR /var/tmp/

RUN npm i -y && npm i express


FROM node:10.15.1-alpine

COPY --from=build /var/tmp/dist/ /var/app/dist/

COPY src/client/server/ /var/app/server/

COPY package.json /var/app/

COPY --from=production /var/tmp/node_modules/ /var/app/node_modules/

WORKDIR /var/app/

RUN npm i -g pm2

EXPOSE 8080

ENV PORT=8080

CMD ["pm2", "start", "--no-daemon", "server/index.js"]
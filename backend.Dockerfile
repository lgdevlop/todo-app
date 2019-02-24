# FROM node:8-alpine
FROM node:10.15.1-alpine as buildserver

WORKDIR /var/tmp-server/

COPY src/server/ /var/tmp-server/

RUN npm install --production


FROM node:10.15.1-alpine

WORKDIR /var/server/

COPY --from=buildserver /var/tmp-server/ /var/server/

RUN npm i -g pm2

EXPOSE 4444

ENV HOST=dbmongo

CMD ["pm2", "start", "--no-daemon", "index.js"]

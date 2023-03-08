FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn build
RUN yarn start

EXPOSE 3333
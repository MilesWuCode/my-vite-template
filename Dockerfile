FROM node:lts-alpine

RUN mkdir -p /app

COPY . /app

WORKDIR /app

RUN yarn global add http-server

RUN yarn install && yarn cache clean

RUN yarn build

EXPOSE 8080

CMD ["http-server", "dist" ]
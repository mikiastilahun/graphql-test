FROM node:10

WORKDIR /app

COPY . /app

RUN yarn

RUN yarn start


EXPOSE 3000
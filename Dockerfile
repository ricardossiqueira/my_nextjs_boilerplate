FROM node:latest

WORKDIR /usr/app

COPY package.json .
COPY .env.local .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]



FROM node:20.11.1-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]


# docker run -v $(PWD)/:/usr/src/app -p 3000:3000 --network node-nginx ege/node:dev
FROM node:20.15

WORKDIR /usr/src/app_build

ENV DOCKERIZE_VERSION v0.7.0

COPY package.json ./

RUN npm cache clean --force && npm install --legacy-peer-deps

RUN apt  update \
    && apt  install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt  autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

COPY . .

RUN ln -s /usr/src/app /usr/src/app_build

EXPOSE 3000

CMD ["npm","run","start"]


# docker run -v $(PWD)/:/usr/src/app -p 3000:3000 --network node-nginx ege/node:dev
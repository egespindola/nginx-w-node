# 🏆 Nginx with NodeJS and Docker Compose

A simple dockerized API NodeJS project where on each access to the root route, a random name will be inserted into the database and the API will return the name list.

---

## 🚀 Setup

- [Docker Engine (required)](https://docs.docker.com/engine/install/)
- [Docker Compose (required)](https://docs.docker.com/compose/install/)
- [GNU Make (optional)](https://www.gnu.org/software/make/)

```bash
# up containers
docker-compose up -d

# up containers (using makefile)
make app

# open localhost on browser
localhost:80
```

---

## 🛠️ Stacks & Tools

- [NodeJS](https://nodejs.org/en)
- [ExpressJS](https://expressjs.com/)
- [MySQL (_Docker container_)](https://hub.docker.com/_/mysql)
- [Adminer (_Docker container_)](https://hub.docker.com/_/adminer)
- [Nginx (_Docker container_)](https://hub.docker.com/_/nginx)

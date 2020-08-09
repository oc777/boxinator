# Boxinator app

## Infrastructure

- docker-compose with three services: db, server, client
- (at the moment React client runs in `dev` mode)

### DB
- MySql

### Client
- React
- Redux + Thunk
- LESS

### Server/API
- Spring Boot
- Maven
- JDBCTemplate for DB connection



## HOWTO

**Requires:** [Docker for desktop](https://docs.docker.com/get-docker/)

### Start

- start Docker for desktop
- in your terminal ->
- clone git repo: `git clone https://github.com/oc777/boxinator.git`
- move to the project's root dir: `cd boxinator`
- copy and rename `.env.sample` to `.env`: `cp .env.sample .env`
- add credentials for MySQL connection to `.env` file: `nano .env`

- run `docker-compose build`
- run `docker-compose up -d`
- go to your favorite [browser](localhost:8080)
- enjoy :tada:


### Finish
- from project's root dir run `docker-compose rm -s -f`
- to remove **ALL** dangling images: `docker image prune -a -f`
- to remove **ALL** dangling volumes: `docker volume prune -f`



## Improvements

- [ ] docker for dev/prod envs // [source](https://medium.com/vteam/configure-docker-project-for-different-environments-using-docker-compose-3-bfbef37d951c)

- [ ] production env for `client`
- [ ] decompose AddBox form into components
- [ ] custom `color-picker`

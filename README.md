## To run the project, you need to download:

- [Node.js v16](https://github.com/nvm-sh/nvm)
- [yarn >=1.22](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)


- nvm use v16.20.2

- <h3>create .env file and fill with db data for example:</h3>

PGPORT=5434

PGUSER=postgres
  
PGDATABASE=postgres
  
DB_NAME=postgres
  
PGHOST=localhost
  
PGPASSWORD=123456
  
JWT_SECRET=secret


<h3>Install  root dependencies </h3>
yarn

<h3> start db</h3>

docker-compose build

docker-compose up

<h3>   start services </h3>
yarn pm2 start dev.ecosystem.config.js


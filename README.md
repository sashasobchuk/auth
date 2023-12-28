## To run the project, you need to download:

- [Node.js v16](https://github.com/nvm-sh/nvm)
- [yarn >=1.22](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)

<h3>Install  root dependencies </h3>
yarn
<h3>   start services </h3>
yarn pm2 start dev.ecosystem.config.js

<h3> start db</h3>

docker-compose build

docker-compose up
**Node.js and Node Version Manage installation**

https://collabnix.com/how-to-install-and-configure-nvm-on-mac-os/

**Install Docker Desktop on Mac**

Silicon Mac: https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-arm64

Intel Mac: https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-amd64

**Commands**

Install yarn:
    
```
    nvm install 18
    nvm use 18
    npm i -g yarn
```

To run the backend's dev environment execute the following command:

```
    docker-compose -f docker-compose.dev.yaml up --build
```

To run the clientexecute the following command:

```
    cd client
    yarn install
    yarn start
```
# hackaton_01_todolist

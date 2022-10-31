# Initialize a playwright repo 

Run:

    npm init -y     //Initalize node
    npm i -D playwright     //Initalize playwright

Add to package.json dependencies
    "@playwright/test": "^1.27.1",

Add a BaseUrl to the playwright.config.js file (need to create it)

## Run the container and exit once run tests 

Add a custom playwright dockerFile image by specifiyng instructions for configuration

    docker build -t customplay .
    docker run -it --rm customplay


## Spinning up a playwright docker container manually (without docker file image)

The playwright docker image is an ubuntu based image that contains playwright and node js installed.

The following steps are required to spin it up

    1. docker pull mcr.microsoft.com/playwright:v1.27.1-focal
    2. cd into the working directory (e.g. git/playwright-js-practice)
    3. docker run -v ${PWD}:/tests --rm -it mcr.microsoft.com/playwright:v1.27.1-focal /bin/bash
    4. npm install   // installs packages and dependencies
    5. npx playwright install  //install playwright specific binaries
    6. npx playwright test   //runs the defined JS tests that have been mounted on the container


Understanding docker run command:

-v is the volume/bind mount - which would be the current working directory
-i run the container in interactive mode
-t run a pseudo-TTY terminal to interaction directly in interactive mode


In order to return to the container and get into the terminal again (if exited):

    docker ps
    docker exec -it [container-id] bash
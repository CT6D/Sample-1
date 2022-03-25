# FROM will fetch the image from Dockerhub repo if have not already downloaded to local fs
FROM node:17-alpine 

# RUN npm install -g nodemon

# specify a working directory for the Docker image --- deniz-butik-fe
WORKDIR /deniz-butik-frontend

# Copying package json first will ensure npm install can run before the rest of the files are copied
# layer caching solution!!
COPY package.json .

# To run a command
# RUN is called during build time of the image - not a running process of the image
RUN npm install 

# (from) current dir of Dockerfile -> (to) relative (.) dir of the image
# to cpy somewhere else specify another path e.g. /app, /deniz-butik 
COPY . .

# Used for Docker desktop for port mapping (optional for CLI)
# react app container will be on port 4444
EXPOSE 4444

# CMD to run a command once the container starts up everytime
# runs the start script inside package.json -- this starts up the dev environment of the react app
CMD ["npm", "start"]
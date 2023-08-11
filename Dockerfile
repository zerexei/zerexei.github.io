# set docker image
FROM node:latest

# set working directory
WORKDIR /home/node/app

# copy package.json & package-lock.json to your working directory
COPY package*.json /home/node/app

# install the npm packages
RUN npm ci 

# copy your files to your working directory
COPY . /home/node/app

# expose your port
EXPOSE 8000

# snitches get stiches 🤫
CMD ["npm", "run","dev"]
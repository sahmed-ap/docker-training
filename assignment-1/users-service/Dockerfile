# Specify the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm i -g nodemon

# Copy the rest of the application code
COPY . /app

RUN cd /app
RUN npm install

# Specify the command to run the application
CMD ["npm", "run", "start:dev"]

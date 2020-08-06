# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM hub.17usoft.com/base/nodejs:v12.17.0

# Create and change to the app directory.
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]

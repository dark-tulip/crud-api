FROM node:16.13.1  


# this path as the default location
WORKDIR /app

# We copy the package.json and package-lock.json files into our working directory /app.
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

# adds our source code into the image
COPY . . 
CMD ["npm", "start"]  
